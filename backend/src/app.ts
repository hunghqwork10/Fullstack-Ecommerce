import express from 'express'
import cors from 'cors';
import { resourceRouter } from './routes/v1/resourceRoutes.js'
import { errorHandler } from './middleware/errorHandler.js'

export const app = express()

// 1. Cấu hình CORS chuẩn: Cho phép Frontend React truy cập vào API
app.use(cors({
  origin: 'http://localhost:5173', // Port mặc định của Vite ReactJS
  credentials: true // Cho phép gửi kèm cookie / token nếu sau này hệ thống cần
}));

// 2. Các middleware cơ bản khác
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

app.get('/', (_request, response) => {
  response.json({ message: 'Ecommerce API is running' })
})

app.get('/health', (_request, response) => {
  response.json({ status: 'ok' })
})

app.use('/api/v1', resourceRouter)
app.use(errorHandler)
