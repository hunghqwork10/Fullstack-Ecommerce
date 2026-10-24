import { Pool } from 'pg'

const connectionString = process.env.DATABASE_URL

export const pool = connectionString
  ? new Pool({ connectionString })
  : new Pool({
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST ?? 'localhost',
      port: Number(process.env.DB_PORT) || 5432,
      database: process.env.DB_NAME,
    })

pool.on('error', (error) => {
  console.error('Unexpected PostgreSQL pool error:', error)
})
