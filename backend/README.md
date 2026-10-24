# Ecommerce REST API

Express + TypeScript REST API for the PostgreSQL ecommerce schema.

## Run locally

1. Create a PostgreSQL database and apply your schema SQL.
2. Copy `.env.example` to `.env`, then set `DATABASE_URL` to your local connection string.
3. Install dependencies and start the API:

```bash
npm install
npm run dev
```

The server listens at `http://localhost:3000` by default. Set `PORT` to change it.
The API checks the database connection before starting.

## API

All resources support `GET /api/v1/{resource}`, `GET /api/v1/{resource}/:id`,
`POST /api/v1/{resource}`, `PATCH /api/v1/{resource}/:id`, and
`DELETE /api/v1/{resource}/:id`.

Resources: `users`, `user-addresses`, `categories`, `products`,
`product-variants`, `cart-items`, `orders`, and `order-items`.

List endpoints accept `page` and `limit` query parameters (default 1 and 20,
maximum page size 100). Responses include pagination metadata.

User creation and password updates accept `password`; passwords are hashed
before storage and `password_hash` is never returned by the API.

This is a data API scaffold: authentication, authorization, business workflows
(including inventory updates during checkout), and production CORS policy still
need to be implemented before exposing it publicly.
