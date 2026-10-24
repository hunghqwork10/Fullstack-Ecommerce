import { HttpError } from '../helpers/httpError.js'
import { resources, type ResourceName } from '../models/resources.js'

const enumValues: Record<string, string[]> = {
  role: ['customer', 'admin', 'staff'],
  status: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'],
}

export const validateResourceBody = (
  resourceName: ResourceName,
  body: unknown,
  isUpdate: boolean,
) => {
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    throw new HttpError(400, 'Request body must be a JSON object.')
  }

  const resource = resources[resourceName]
  const input = body as Record<string, unknown>
  const allowedFields = Object.keys(resource.fields)
  const unknownFields = Object.keys(input).filter(
    (field) => !allowedFields.includes(field),
  )

  if (unknownFields.length > 0) {
    throw new HttpError(
      400,
      `Unknown field(s): ${unknownFields.join(', ')}.`,
    )
  }

  if (isUpdate && Object.keys(input).length === 0) {
    throw new HttpError(400, 'Provide at least one field to update.')
  }

  if (!isUpdate) {
    const missingFields = resource.required.filter(
      (field) => input[field] === undefined || input[field] === null,
    )

    if (missingFields.length > 0) {
      throw new HttpError(
        400,
        `Required field(s): ${missingFields.join(', ')}.`,
      )
    }
  }

  for (const [field, value] of Object.entries(input)) {
    if (value === undefined) {
      throw new HttpError(400, `Field "${field}" cannot be undefined.`)
    }

    if (
      field === 'password' &&
      (typeof value !== 'string' || value.length < 8)
    ) {
      throw new HttpError(400, 'Password must contain at least 8 characters.')
    }

    if (
      enumValues[field] &&
      (typeof value !== 'string' || !enumValues[field].includes(value))
    ) {
      throw new HttpError(
        400,
        `Invalid value for "${field}". Allowed values: ${enumValues[field].join(', ')}.`,
      )
    }
  }

  return input
}
