# Vibe Commerce - Full Stack E-Commerce Cart Application

A modern, full-stack shopping cart application built with React, Node.js, Express, and MongoDB. This project demonstrates a complete e-commerce flow including product browsing, cart management, and checkout functionality.

## 🚀 Live Demo
[Demo Video Link] - *Add your Loom/YouTube video link here*

## 📸 Screenshots

### Product Listing Page
![Product Grid](./screenshots/products.png)
*Browse our curated collection of electronics and accessories*

### Shopping Cart
![Shopping Cart](./screenshots/cart.png)
*Manage items with quantity controls and see real-time totals*

### Checkout Process
![Checkout Modal](./screenshots/checkout.png)
*Simple checkout form with validation*

### Order Confirmation
![Receipt](./screenshots/receipt.png)
*Detailed order receipt with confirmation*

## 🛠️ Tech Stack

### Frontend
- **React** (v18.2.0) - UI library
- **Axios** - HTTP client for API calls
- **CSS3** - Custom styling with responsive design

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM

## ✨ Features

### Implemented Features
✅ **Product Catalog**
- Display 10 mock products with images, names, prices, and descriptions
- Product categories and stock tracking
- Responsive grid layout

✅ **Shopping Cart**
- Add products to cart with quantity
- Update item quantities (increase/decrease)
- Remove individual items
- Clear entire cart
- Real-time total calculation
- Persistent cart state (MongoDB)

✅ **Checkout Process**
- Customer information form (name & email)
- Form validation
- Mock payment processing
- Order receipt generation
- Automatic cart clearing after checkout

✅ **Error Handling**
- Comprehensive error messages
- Input validation on both frontend and backend
- Stock verification
- Network error handling

✅ **Responsive Design**
- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly controls

✅ **Database Persistence**
- Products stored in MongoDB
- Cart state persisted per user
- Order history tracking

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

## 🔌 API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product

### Cart
- `GET /api/cart` - Get cart with total
- `POST /api/cart` - Add item (body: `{productId, quantity}`)
- `PUT /api/cart/:productId` - Update quantity (body: `{quantity}`)
- `DELETE /api/cart/:productId` - Remove item
- `DELETE /api/cart` - Clear cart

### Checkout
- `POST /api/checkout` - Process order (body: `{customerName, customerEmail}`)
- `GET /api/checkout/orders` - Get order history

### Health
- `GET /api/health` - API health check

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd Assignment
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file with the following:
PORT=5000
MONGODB_URI=mongodb://localhost:27017/vibe-commerce
NODE_ENV=development

# Start MongoDB (if running locally)
# For Windows: net start MongoDB
# For Mac/Linux: sudo systemctl start mongod

# Start backend server
npm start
# OR for development with auto-reload:
npm run dev
```

The backend server will start on `http://localhost:5000`

### 3. Frontend Setup

Open a new terminal:

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start React development server
npm start
```

The frontend will open automatically at `http://localhost:3000`

## 🎯 Usage Guide

### Testing the Application

1. **Browse Products**
   - View all 10 products on the main page
   - Each product shows image, name, description, category, and price

2. **Add to Cart**
   - Click "Add to Cart" on any product
   - See success message and cart badge update

3. **Manage Cart**
   - Click cart icon in header to toggle cart view
   - Increase/decrease quantities using +/- buttons
   - Remove items individually or clear entire cart
   - See total update in real-time

4. **Checkout**
   - Click "Proceed to Checkout" button
   - Fill in name and email (validation included)
   - Submit to complete order

5. **View Receipt**
   - See order confirmation with order number
   - View itemized list and total
   - Receipt includes timestamp and customer info

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

### Checkout
```bash
curl -X POST http://localhost:5000/api/checkout \
  -H "Content-Type: application/json" \
  -d '{"customerName": "John Doe", "customerEmail": "john@example.com"}'
```

## 🌟 Bonus Features Implemented

✅ **Database Persistence**
- MongoDB integration for products, cart, and orders
- Cart persists across page refreshes
- Order history stored

✅ **Error Handling**
- Try-catch blocks on all async operations
- User-friendly error messages
- Form validation with specific error messages
- Stock verification before adding to cart

✅ **Enhanced UX**
- Loading states
- Success notifications
- Smooth animations
- Responsive modal dialogs
- Image fallbacks for broken links

## 🏗️ Architecture & Design Decisions

### Frontend Architecture
- **Component-based design**: Modular, reusable React components
- **Centralized state**: Single source of truth in App.js
- **API abstraction**: All API calls in dedicated service layer
- **Responsive CSS**: Mobile-first approach with flexbox/grid

### Backend Architecture
- **MVC Pattern**: Routes, models, and controllers separation
- **Middleware**: CORS, JSON parsing, error handling
- **Schema validation**: Mongoose schemas with built-in validation
- **Auto-calculation**: Cart total calculated via Mongoose pre-save hooks

### Database Schema

**Product Schema:**
```javascript
{
  id: Number (unique),
  name: String,
  price: Number,
  description: String,
  image: String (URL),
  category: String,
  stock: Number
}
```

**Cart Schema:**
```javascript
{
  userId: String,
  items: [{
    productId: Number,
    name: String,
    price: Number,
    quantity: Number,
    image: String
  }],
  totalAmount: Number (auto-calculated)
}
```

**Order Schema:**
```javascript
{
  userId: String,
  customerName: String,
  customerEmail: String,
  items: Array,
  totalAmount: Number,
  orderDate: Date,
  status: String
}
```

## 🔒 Security Considerations

- Input validation on both frontend and backend
- Email format validation
- Quantity limits and stock checking
- CORS configured for specific origins
- Environment variables for sensitive data

## 🚧 Future Enhancements

- [ ] User authentication with JWT
- [ ] Payment gateway integration (Stripe/PayPal)
- [ ] Product search and filtering
- [ ] Wishlist functionality
- [ ] Product reviews and ratings
- [ ] Admin dashboard
- [ ] Email notifications
- [ ] Order tracking
- [ ] Multiple shipping addresses
- [ ] Coupon/discount codes

## 🐛 Known Issues

- Mock user ID is hardcoded (would need authentication in production)
- No session management (uses single mock user)
- Images from Unsplash may occasionally fail to load

## 📝 Development Notes

### Running in Production
```bash
# Backend
cd backend
npm install --production
NODE_ENV=production node server.js

# Frontend
cd frontend
npm run build
# Serve the build folder with a static server
```

### Environment Variables
Create `.env` file in backend:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/vibe-commerce
NODE_ENV=development
```

## 👤 Author

[Your Name]
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com

## 📄 License

This project is created for Vibe Commerce internship screening purposes.

## 🙏 Acknowledgments

- Product images from Unsplash
- Icons: Unicode emoji
- Gradient inspiration from UI Gradients

---

**Note:** This is a mock e-commerce application created for educational and demonstration purposes. No real transactions are processed.

## 📞 Support

For questions or issues, please contact:
- Create an issue in this repository
- Email: your.email@example.com

---

**Built with ❤️ for Vibe Commerce**
