# Flower Backend (Express + MongoDB)

## Endpoints
- GET /api/shops
- GET /api/shops/:id/products
- POST /api/orders
- GET /api/orders/:id

## Local setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Copy `.env.example` to `.env` and set `MONGO_URL` with your MongoDB Atlas URI.
3. Seed database with sample data:
   ```bash
   npm run seed
   ```
4. Start server:
   ```bash
   npm run dev
   # or: npm start
   ```

## Deploy to Render
1. Push repo to GitHub.
2. Create new Web Service on Render (Node environment).
3. Add Env Var `MONGO_URL` with your Atlas connection string.
4. Deploy!
