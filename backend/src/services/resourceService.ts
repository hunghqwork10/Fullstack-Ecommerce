import bcrypt from 'bcryptjs'
import { pool } from '../configs/database.js'
import { HttpError } from '../helpers/httpError.js'
import { resources, type ResourceName } from '../models/resources.js'

const DEFAULT_PAGE_SIZE = 20
const MAX_PAGE_SIZE = 100

const getSelect = (resourceName: ResourceName) =>
  resources[resourceName].select ?? '*'

const parsePositiveInteger = (
  value: string | undefined,
  fallback: number,
  name: string,
  maximum = Number.MAX_SAFE_INTEGER,
) => {
  if (value === undefined) return fallback

  const parsed = Number(value)
  if (!Number.isSafeInteger(parsed) || parsed < 1 || parsed > maximum) {
    throw new HttpError(400, `Query parameter "${name}" is invalid.`)
  }

  return parsed
}

const prepareValues = async (
  resourceName: ResourceName,
  input: Record<string, unknown>,
) => {
  const fields = resources[resourceName].fields
  const entries = Object.entries(input)
  const values = await Promise.all(
    entries.map(async ([field, value]) =>
      resourceName === 'users' && field === 'password'
        ? bcrypt.hash(value as string, 12)
        : value,
    ),
  )

  return entries.map(([field], index) => ({
    column: fields[field],
    value: values[index],
  }))
}

export const listResources = async (
  resourceName: ResourceName,
  query: { page?: string; limit?: string },
) => {
  const page = parsePositiveInteger(query.page, 1, 'page')
  const limit = parsePositiveInteger(query.limit, DEFAULT_PAGE_SIZE, 'limit', MAX_PAGE_SIZE)
  const offset = (page - 1) * limit
  const { table } = resources[resourceName]
  const [itemsResult, countResult] = await Promise.all([
    pool.query(
      `SELECT ${getSelect(resourceName)} FROM ${table} ORDER BY id LIMIT $1 OFFSET $2`,
      [limit, offset],
    ),
    pool.query<{ count: string }>(`SELECT COUNT(*) FROM ${table}`),
  ])

  return {
    data: itemsResult.rows,
    pagination: {
      page,
      limit,
      total: Number(countResult.rows[0].count),
    },
  }
}

export const getResource = async (resourceName: ResourceName, id: number) => {
  const { table } = resources[resourceName]
  const result = await pool.query(
    `SELECT ${getSelect(resourceName)} FROM ${table} WHERE id = $1`,
    [id],
  )

  if (result.rowCount === 0) {
    throw new HttpError(404, 'Resource not found.')
  }

  return result.rows[0]
}

export const createResource = async (
  resourceName: ResourceName,
  input: Record<string, unknown>,
) => {
  const { table } = resources[resourceName]
  const values = await prepareValues(resourceName, input)
  const columns = values.map(({ column }) => column)
  const placeholders = values.map((_, index) => `$${index + 1}`)
  const result = await pool.query(
    `INSERT INTO ${table} (${columns.join(', ')}) VALUES (${placeholders.join(', ')}) RETURNING ${getSelect(resourceName)}`,
    values.map(({ value }) => value),
  )

  return result.rows[0]
}

export const updateResource = async (
  resourceName: ResourceName,
  id: number,
  input: Record<string, unknown>,
) => {
  const { table } = resources[resourceName]
  const values = await prepareValues(resourceName, input)
  const assignments = values.map(
    ({ column }, index) => `${column} = $${index + 1}`,
  )

  const result = await pool.query(
    `UPDATE ${table} SET ${assignments.join(', ')} WHERE id = $${values.length + 1} RETURNING ${getSelect(resourceName)}`,
    [...values.map(({ value }) => value), id],
  )

  if (result.rowCount === 0) {
    throw new HttpError(404, 'Resource not found.')
  }

  return result.rows[0]
}

export const deleteResource = async (resourceName: ResourceName, id: number) => {
  const { table } = resources[resourceName]
  const result = await pool.query(
    `DELETE FROM ${table} WHERE id = $1 RETURNING ${getSelect(resourceName)}`,
    [id],
  )

  if (result.rowCount === 0) {
    throw new HttpError(404, 'Resource not found.')
  }

  return result.rows[0]
}
