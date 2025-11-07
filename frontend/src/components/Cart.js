import React from 'react';

function Cart({ cart, onUpdateQuantity, onRemove, onClear, onCheckout }) {
  if (!cart || cart.items.length === 0) {
    return (
      <section className="cart-section">
        <h2>🛒 Shopping Cart</h2>
        <div className="empty-cart">
          <div className="empty-cart-icon">🛍️</div>
          <p>Your cart is empty</p>
          <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
            Add some products to get started!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="cart-section">
      <h2>🛒 Shopping Cart ({cart.itemCount} items)</h2>
      
      <div className="cart-items">
        {cart.items.map((item) => (
          <div key={item.productId} className="cart-item">
            <img
              src={item.image}
              alt={item.name}
              className="cart-item-image"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/120x120?text=Product';
              }}
            />
            <div className="cart-item-details">
              <div>
                <h3 className="cart-item-name">{item.name}</h3>
                <div className="cart-item-price">${item.price.toFixed(2)} each</div>
              </div>
              
              <div className="cart-item-controls">
                <div className="quantity-controls">
                  <button
                    className="quantity-btn"
                    onClick={() => onUpdateQuantity(item.productId, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    −
                  </button>
                  <span className="quantity-value">{item.quantity}</span>
                  <button
                    className="quantity-btn"
                    onClick={() => onUpdateQuantity(item.productId, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                
                <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
                
                <button
                  className="remove-btn"
                  onClick={() => onRemove(item.productId)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <div className="cart-total">
          <span>Total:</span>
          <span className="cart-total-amount">${cart.totalAmount.toFixed(2)}</span>
        </div>
        
        <div className="cart-actions">
          <button className="clear-cart-btn" onClick={onClear}>
            Clear Cart
          </button>
          <button className="checkout-btn" onClick={onCheckout}>
            Proceed to Checkout
          </button>
        </div>
      </div>
    </section>
  );
}

export default Cart;
