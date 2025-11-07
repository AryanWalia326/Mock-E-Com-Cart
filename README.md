# Vibe Commerce - Shopping Cart Application

A full-stack e-commerce shopping cart built with React, Node.js, Express, and MongoDB.

## Screenshots

### Product Listing
![Product Grid](./screenshots/products.png)

### Shopping Cart
![Shopping Cart](./screenshots/cart.png)

### Checkout
![Checkout Modal](./screenshots/checkout.png)

### Order Confirmation
![Receipt](./screenshots/receipt.png)

## Tech Stack

### Frontend
- React (v18.2.0)
- Axios
- CSS3

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

## Features

**Product Catalog**
- 10 mock products with images, names, prices, and descriptions
- Product categories and stock tracking
- Responsive grid layout

**Shopping Cart**
- Add products to cart
- Update quantities
- Remove items
- Clear cart
- Real-time total calculation
- Cart data persists in MongoDB

**Checkout**
- Customer information form (name & email)
- Form validation
- Order receipt generation
- Cart clears after checkout

**Error Handling**
- Input validation
- Stock verification
- Error messages

**Responsive Design**
- Works on mobile, tablet, and desktop

## 📁 Project Structure

```
Assignment/
├── backend/
│   ├── models/
│   │   ├── Product.js      # Product schema
│   │   ├── Cart.js         # Cart schema with auto-calculation
│   │   └── Order.js        # Order/receipt schema
│   ├── routes/
│   │   ├── products.js     # GET /api/products
│   │   ├── cart.js         # Cart CRUD operations
│   │   └── checkout.js     # POST /api/checkout
│   ├── seedData.js         # Mock product data
│   ├── server.js           # Express server & DB connection
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── ProductGrid.js    # Product display
│   │   │   ├── Cart.js           # Cart management
│   │   │   ├── CheckoutModal.js  # Checkout form
│   │   │   └── ReceiptModal.js   # Order confirmation
│   │   ├── services/
│   │   │   └── api.js            # API client
│   │   ├── App.js                # Main component
│   │   ├── App.css               # Styling
│   │   └── index.js
│   └── package.json
│
└── README.md
```

## API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product

### Cart
- `GET /api/cart` - Get cart
- `POST /api/cart` - Add item
- `PUT /api/cart/:productId` - Update quantity
- `DELETE /api/cart/:productId` - Remove item
- `DELETE /api/cart` - Clear cart

### Checkout
- `POST /api/checkout` - Process order
- `GET /api/checkout/orders` - Get order history

## Installation

### Prerequisites
- Node.js (v14+)
- MongoDB
- npm

### Setup

```bash
git clone https://github.com/AryanWalia326/Mock-E-Com-Cart.git
cd Mock-E-Com-Cart
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Backend
cd backend
npm install

# Create .env file
PORT=5000
MONGODB_URI=mongodb://localhost:27017/vibe-commerce
NODE_ENV=development

# Start backend
npm start
```

Backend runs on `http://localhost:5000`

### Frontend

```bash
cd frontend
npm install
npm start
```

Frontend opens at `http://localhost:3000`

## Usage

1. Browse products
2. Click "Add to Cart"
3. View cart by clicking cart icon
4. Update quantities with +/- buttons
5. Click "Proceed to Checkout"
6. Fill in name and email
7. Submit to complete order

## 🧪 Testing API with cURL/Postman

### Get Products
```bash
curl http://localhost:5000/api/products
```

### Add to Cart
```bash
curl -X POST http://localhost:5000/api/cart \
  -H "Content-Type: application/json" \
  -d '{"productId": 1, "quantity": 2}'
```

## Testing API

```bash
# Get products
curl http://localhost:5000/api/products

# Add to cart
curl -X POST http://localhost:5000/api/cart \
  -H "Content-Type: application/json" \
  -d '{"productId": 1, "quantity": 2}'
```

## Project Structure

The application uses:
- Component-based React architecture
- MVC pattern on backend
- MongoDB for data persistence
- Express middleware for request handling

## Database Models

Products, Cart, and Orders are stored in MongoDB with Mongoose schemas.

## Future Improvements

- User authentication
- Payment integration
- Search and filters
- Admin dashboard
- Email notifications

## Note

This is a demo application created for the Vibe Commerce internship assignment. No real payments are processed.
