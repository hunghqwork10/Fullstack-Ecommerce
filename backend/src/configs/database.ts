import { Pool } from 'pg'

export const pool = new Pool(
  process.env.DATABASE_URL
    ? { connectionString: process.env.DATABASE_URL }
    : undefined,
)

pool.on('error', (error) => {
  console.error('Unexpected PostgreSQL pool error:', error)
})
