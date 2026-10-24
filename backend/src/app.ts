import express from 'express'
import { resourceRouter } from './routes/v1/resourceRoutes.js'
import { errorHandler } from './middleware/errorHandler.js'

export const app = express()

app.use(express.json({ limit: '1mb' }))

app.get('/', (_request, response) => {
  response.json({ message: 'Ecommerce API is running' })
})

app.get('/health', (_request, response) => {
  response.json({ status: 'ok' })
})

app.use('/api/v1', resourceRouter)
app.use(errorHandler)
