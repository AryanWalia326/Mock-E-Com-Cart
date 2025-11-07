import React from 'react';

function ReceiptModal({ receipt, onClose }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="receipt">
          <div className="receipt-success-icon">✅</div>
          <h2>Order Confirmed!</h2>
          <p style={{ color: '#7f8c8d', marginBottom: '1rem' }}>
            Thank you for your purchase!
          </p>

          <div className="receipt-details">
            <div className="receipt-row">
              <strong>Order Number:</strong>
              <span>{receipt.orderNumber}</span>
            </div>
            <div className="receipt-row">
              <strong>Customer Name:</strong>
              <span>{receipt.customerName}</span>
            </div>
            <div className="receipt-row">
              <strong>Email:</strong>
              <span>{receipt.customerEmail}</span>
            </div>
            <div className="receipt-row">
              <strong>Order Date:</strong>
              <span>{formatDate(receipt.orderDate)}</span>
            </div>
          </div>

          <div style={{ marginTop: '1.5rem', textAlign: 'left' }}>
            <h3 style={{ marginBottom: '1rem', color: '#2c3e50' }}>Order Items:</h3>
            <div className="receipt-items">
              {receipt.items.map((item, index) => (
                <div key={index} className="receipt-item">
                  <span>
                    {item.name} × {item.quantity}
                  </span>
                  <span>${item.subtotal.toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="receipt-details" style={{ marginTop: '1rem' }}>
            <div className="receipt-row">
              <strong>Total Amount:</strong>
              <strong>${receipt.totalAmount.toFixed(2)}</strong>
            </div>
          </div>

          <button className="close-btn" onClick={onClose}>
            Continue Shopping
          </button>

          <p style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: '#7f8c8d', textAlign: 'center' }}>
            A confirmation email has been sent to {receipt.customerEmail}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ReceiptModal;
