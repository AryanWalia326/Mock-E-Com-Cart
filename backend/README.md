# Backend API

REST API for the shopping cart.

## Setup

```bash
npm install

# Create .env file
PORT=5000
MONGODB_URI=mongodb://localhost:27017/vibe-commerce
NODE_ENV=development

npm start
```

## Endpoints

### Products
- GET `/api/products` - Get all products
- GET `/api/products/:id` - Get single product

### Cart
- GET `/api/cart` - Get cart
- POST `/api/cart` - Add to cart
- PUT `/api/cart/:productId` - Update quantity
- DELETE `/api/cart/:productId` - Remove item
- DELETE `/api/cart` - Clear cart

### Checkout
- POST `/api/checkout` - Process order
- GET `/api/checkout/orders` - Get order history
