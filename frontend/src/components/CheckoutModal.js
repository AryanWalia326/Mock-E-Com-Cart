import React, { useState } from 'react';

function CheckoutModal({ onClose, onCheckout, cartTotal }) {
  const [customerName, setCustomerName] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!customerName.trim()) {
      setError('Please enter your name');
      return;
    }

    if (!customerEmail.trim()) {
      setError('Please enter your email');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(customerEmail)) {
      setError('Please enter a valid email address');
      return;
    }

    try {
      setLoading(true);
      await onCheckout(customerName, customerEmail);
    } catch (err) {
      setError(err.message || 'Failed to process checkout');
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>Checkout</h2>
        
        {error && <div className="error">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="customerName">Full Name *</label>
            <input
              type="text"
              id="customerName"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="Enter your full name"
              required
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="customerEmail">Email Address *</label>
            <input
              type="email"
              id="customerEmail"
              value={customerEmail}
              onChange={(e) => setCustomerEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              disabled={loading}
            />
          </div>

          <div className="cart-total" style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
            <span>Order Total:</span>
            <span className="cart-total-amount">${cartTotal.toFixed(2)}</span>
          </div>

          <div className="form-actions">
            <button
              type="button"
              className="cancel-btn"
              onClick={onClose}
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="submit-btn"
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Place Order'}
            </button>
          </div>
        </form>

        <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: '#7f8c8d', textAlign: 'center' }}>
          * This is a mock checkout. No actual payment will be processed.
        </p>
      </div>
    </div>
  );
}

export default CheckoutModal;
