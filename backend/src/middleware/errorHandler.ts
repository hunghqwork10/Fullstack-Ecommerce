import type { ErrorRequestHandler } from 'express'
import { HttpError } from '../helpers/httpError.js'

type PostgresError = Error & {
  code?: string
  constraint?: string
  type?: string
}

const postgresErrors: Record<string, { status: number; message: string }> = {
  '23502': { status: 400, message: 'A required database field is missing.' },
  '23503': { status: 400, message: 'A related database record does not exist.' },
  '23505': { status: 409, message: 'A record with this value already exists.' },
  '23514': { status: 400, message: 'A database constraint was not satisfied.' },
  '22P02': { status: 400, message: 'A field has an invalid format.' },
  '22003': { status: 400, message: 'A numeric value is outside the allowed range.' },
}

export const errorHandler: ErrorRequestHandler = (
  error: PostgresError,
  _request,
  response,
  _next,
) => {
  if (error instanceof HttpError) {
    response.status(error.statusCode).json({ error: error.message })
    return
  }

  if (error.type === 'entity.parse.failed') {
    response.status(400).json({ error: 'Request body contains invalid JSON.' })
    return
  }

  if (error.code && postgresErrors[error.code]) {
    const databaseError = postgresErrors[error.code]
    response
      .status(databaseError.status)
      .json({ error: databaseError.message })
    return
  }

  console.error('Unhandled API error:', error)
  response.status(500).json({ error: 'An unexpected server error occurred.' })
}
