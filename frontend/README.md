# Vibe Commerce Frontend

React-based frontend for the Vibe Commerce shopping cart application.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

The application will open at `http://localhost:3000`

## Features

- **Product Grid**: Browse 10+ products with images and details
- **Shopping Cart**: Add, update, and remove items
- **Checkout**: Simple form with validation
- **Receipt**: Order confirmation with details
- **Responsive**: Mobile, tablet, and desktop optimized

## Components

### ProductGrid
Displays all products in a responsive grid layout.

### Cart
Shows cart items with quantity controls and total calculation.

### CheckoutModal
Modal form for collecting customer information.

### ReceiptModal
Displays order confirmation and receipt details.

## API Integration

All API calls are centralized in `src/services/api.js`:

```javascript
import { getProducts, addToCart, checkout } from './services/api';
```

## Styling

- Custom CSS with modern design
- Gradient backgrounds
- Smooth animations
- Mobile-first responsive design

## Configuration

Set API URL in environment:
```bash
REACT_APP_API_URL=http://localhost:5000/api
```

Default proxy is configured in `package.json` for development.

## Building for Production

```bash
npm run build
```

Outputs to `build/` directory. Serve with any static file server.
