const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: {
    type: String,
    default: 'mock-user-1'
  },
  customerName: {
    type: String,
    required: true
  },
  customerEmail: {
    type: String,
    required: true
  },
  items: [{
    productId: Number,
    name: String,
    price: Number,
    quantity: Number,
    image: String
  }],
  totalAmount: {
    type: Number,
    required: true
  },
  orderDate: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    default: 'completed'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Order', orderSchema);
