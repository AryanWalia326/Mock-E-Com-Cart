# Vibe Commerce Backend API

REST API for the Vibe Commerce shopping cart application.

## Quick Start

```bash
# Install dependencies
npm install

# Set up environment variables (create .env file)
PORT=5000
MONGODB_URI=mongodb://localhost:27017/vibe-commerce
NODE_ENV=development

# Start server
npm start

# Development mode with auto-reload
npm run dev
```

## API Documentation

### Base URL
```
http://localhost:5000/api
```

### Endpoints

#### Products
- **GET** `/products` - Get all products
  - Response: `{ success: true, data: [...products] }`

- **GET** `/products/:id` - Get single product
  - Response: `{ success: true, data: {...product} }`

#### Cart
- **GET** `/cart` - Get cart
  - Response: `{ success: true, data: { items: [], totalAmount: 0, itemCount: 0 } }`

- **POST** `/cart` - Add to cart
  - Body: `{ productId: number, quantity: number }`
  - Response: Updated cart data

- **PUT** `/cart/:productId` - Update quantity
  - Body: `{ quantity: number }`
  - Response: Updated cart data

- **DELETE** `/cart/:productId` - Remove item
  - Response: Updated cart data

- **DELETE** `/cart` - Clear cart
  - Response: Empty cart data

#### Checkout
- **POST** `/checkout` - Process checkout
  - Body: `{ customerName: string, customerEmail: string }`
  - Response: `{ success: true, data: {...receipt} }`

- **GET** `/checkout/orders` - Get order history
  - Response: `{ success: true, data: [...orders] }`

## Features

- MongoDB database integration
- Automatic cart total calculation
- Input validation
- Error handling
- CORS enabled
- Request logging

## Database Models

### Product
- id (Number, unique)
- name (String)
- price (Number)
- description (String)
- image (String)
- category (String)
- stock (Number)

### Cart
- userId (String)
- items (Array of CartItems)
- totalAmount (Number, auto-calculated)

### Order
- userId (String)
- customerName (String)
- customerEmail (String)
- items (Array)
- totalAmount (Number)
- orderDate (Date)
- status (String)

## Error Handling

All endpoints return consistent error responses:
```json
{
  "success": false,
  "message": "Error description",
  "error": "Detailed error (dev mode only)"
}
```

## Testing

Use cURL, Postman, or any HTTP client:

```bash
# Health check
curl http://localhost:5000/api/health

# Get products
curl http://localhost:5000/api/products

# Add to cart
curl -X POST http://localhost:5000/api/cart \
  -H "Content-Type: application/json" \
  -d '{"productId": 1, "quantity": 2}'
```
