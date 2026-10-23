import express from 'express'

const app = express()
const port = Number(process.env.PORT) || 3000

app.use(express.json())

app.get('/', (_request, response) => {
  response.json({
    message: 'Ecommerce API is running',
  })
})

app.get('/health', (_request, response) => {
  response.json({
    status: 'ok',
  })
})

app.listen(port, () => {
  console.log(`Ecommerce API is listening at http://localhost:${port}`)
})
