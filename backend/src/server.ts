import 'dotenv/config'
import { app } from './app.js'
import { pool } from './configs/database.js'

const port = Number(process.env.PORT) || 3000

const server = async () => {
  try {
    await pool.query('SELECT 1')

    const httpServer = app.listen(port, () => {
      console.log(`Ecommerce API is listening at http://localhost:${port}`)
    })

    const shutdown = (signal: string) => {
      console.log(`${signal} received. Shutting down gracefully.`)
      httpServer.close(() => {
        void pool.end().then(() => process.exit(0))
      })
    }

    process.once('SIGINT', () => shutdown('SIGINT'))
    process.once('SIGTERM', () => shutdown('SIGTERM'))
  } catch (error) {
    console.error('Failed to start Ecommerce API:', error)
    await pool.end()
    process.exitCode = 1
  }
}

void server()
