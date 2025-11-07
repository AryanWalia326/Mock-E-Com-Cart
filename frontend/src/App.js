import React, { useState, useEffect } from 'react';
import './App.css';
import ProductGrid from './components/ProductGrid';
import Cart from './components/Cart';
import CheckoutModal from './components/CheckoutModal';
import ReceiptModal from './components/ReceiptModal';
import { getProducts, getCart, addToCart, updateCartItem, removeFromCart, clearCart, checkout } from './services/api';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({ items: [], totalAmount: 0, itemCount: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [showReceiptModal, setShowReceiptModal] = useState(false);
  const [receipt, setReceipt] = useState(null);
  const [showCart, setShowCart] = useState(false);

  // Fetch products on mount
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await getProducts();
      if (response.success) {
        setProducts(response.data);
      }
      setError(null);
    } catch (err) {
      setError('Failed to load products. Please try again later.');
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchCart = async () => {
    try {
      const response = await getCart();
      if (response.success) {
        setCart(response.data);
      }
    } catch (err) {
      console.error('Error fetching cart:', err);
    }
  };

  const handleAddToCart = async (productId) => {
    try {
      const response = await addToCart(productId, 1);
      if (response.success) {
        setCart(response.data);
        showSuccessMessage('Product added to cart!');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to add product to cart');
      console.error('Error adding to cart:', err);
    }
  };

  const handleUpdateQuantity = async (productId, newQuantity) => {
    if (newQuantity < 1) return;
    
    try {
      const response = await updateCartItem(productId, newQuantity);
      if (response.success) {
        setCart(response.data);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update cart');
      console.error('Error updating cart:', err);
    }
  };

  const handleRemoveFromCart = async (productId) => {
    try {
      const response = await removeFromCart(productId);
      if (response.success) {
        setCart(response.data);
        showSuccessMessage('Product removed from cart');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to remove product from cart');
      console.error('Error removing from cart:', err);
    }
  };

  const handleClearCart = async () => {
    if (window.confirm('Are you sure you want to clear your cart?')) {
      try {
        const response = await clearCart();
        if (response.success) {
          setCart(response.data);
          showSuccessMessage('Cart cleared');
        }
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to clear cart');
        console.error('Error clearing cart:', err);
      }
    }
  };

  const handleCheckout = async (customerName, customerEmail) => {
    try {
      const response = await checkout(customerName, customerEmail);
      if (response.success) {
        setReceipt(response.data);
        setShowCheckoutModal(false);
        setShowReceiptModal(true);
        setCart({ items: [], totalAmount: 0, itemCount: 0 });
      }
    } catch (err) {
      throw new Error(err.response?.data?.message || 'Failed to process checkout');
    }
  };

  const showSuccessMessage = (message) => {
    setSuccessMessage(message);
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <h1>🛍️ Vibe Commerce</h1>
          <div className="cart-icon-header" onClick={toggleCart}>
            <span>🛒 Cart</span>
            {cart.itemCount > 0 && (
              <div className="cart-badge">{cart.itemCount}</div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Success Message */}
        {successMessage && (
          <div className="success-message">{successMessage}</div>
        )}

        {/* Error Message */}
        {error && (
          <div className="error">
            {error}
            <button onClick={() => setError(null)} style={{ marginLeft: '1rem', cursor: 'pointer' }}>✕</button>
          </div>
        )}

        {/* Loading State */}
        {loading && <div className="loading">Loading products...</div>}

        {/* Products Section */}
        {!loading && (
          <>
            <section className="products-section">
              <h2>Featured Products</h2>
              <ProductGrid products={products} onAddToCart={handleAddToCart} />
            </section>

            {/* Cart Section - Show when toggled or has items */}
            {(showCart || cart.items.length > 0) && (
              <Cart
                cart={cart}
                onUpdateQuantity={handleUpdateQuantity}
                onRemove={handleRemoveFromCart}
                onClear={handleClearCart}
                onCheckout={() => setShowCheckoutModal(true)}
              />
            )}
          </>
        )}
      </main>

      {/* Checkout Modal */}
      {showCheckoutModal && (
        <CheckoutModal
          onClose={() => setShowCheckoutModal(false)}
          onCheckout={handleCheckout}
          cartTotal={cart.totalAmount}
        />
      )}

      {/* Receipt Modal */}
      {showReceiptModal && receipt && (
        <ReceiptModal
          receipt={receipt}
          onClose={() => setShowReceiptModal(false)}
        />
      )}
    </div>
  );
}

export default App;
