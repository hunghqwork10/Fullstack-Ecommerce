import type { Request, Response, NextFunction } from 'express'
import { HttpError } from '../helpers/httpError.js'
import type { ResourceName } from '../models/resources.js'
import { validateResourceBody } from '../validations/resourceValidation.js'
import {
  createResource,
  deleteResource,
  getResource,
  listResources,
  updateResource,
} from '../services/resourceService.js'

const parseId = (value: string | string[] | undefined) => {
  if (typeof value !== 'string') {
    throw new HttpError(400, 'ID must be a positive integer.')
  }

  const id = Number(value)
  if (!Number.isSafeInteger(id) || id < 1) {
    throw new HttpError(400, 'ID must be a positive integer.')
  }
  return id
}

export const list = (resourceName: ResourceName) => async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    response.json(await listResources(resourceName, request.query))
  } catch (error) {
    next(error)
  }
}

export const get = (resourceName: ResourceName) => async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    response.json({
      data: await getResource(resourceName, parseId(request.params.id)),
    })
  } catch (error) {
    next(error)
  }
}

export const create = (resourceName: ResourceName) => async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    const body = validateResourceBody(resourceName, request.body, false)
    response
      .status(201)
      .json({ data: await createResource(resourceName, body) })
  } catch (error) {
    next(error)
  }
}

export const update = (resourceName: ResourceName) => async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    const body = validateResourceBody(resourceName, request.body, true)
    response.json({
      data: await updateResource(
        resourceName,
        parseId(request.params.id),
        body,
      ),
    })
  } catch (error) {
    next(error)
  }
}

export const remove = (resourceName: ResourceName) => async (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  try {
    response.json({
      data: await deleteResource(resourceName, parseId(request.params.id)),
    })
  } catch (error) {
    next(error)
  }
}
