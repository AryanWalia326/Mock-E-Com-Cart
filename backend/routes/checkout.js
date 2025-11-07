const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const Cart = require('../models/Cart');

// POST /api/checkout - Process checkout
router.post('/', async (req, res) => {
  try {
    const { customerName, customerEmail } = req.body;
    
    // Validation
    if (!customerName || !customerEmail) {
      return res.status(400).json({
        success: false,
        message: 'Customer name and email are required'
      });
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(customerEmail)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email format'
      });
    }
    
    const userId = 'mock-user-1';
    const cart = await Cart.findOne({ userId });
    
    if (!cart || cart.items.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Cart is empty'
      });
    }
    
    // Create order
    const order = new Order({
      userId,
      customerName,
      customerEmail,
      items: cart.items,
      totalAmount: cart.totalAmount
    });
    
    await order.save();
    
    // Clear cart after successful checkout
    cart.items = [];
    await cart.save();
    
    // Generate mock receipt
    const receipt = {
      orderId: order._id,
      orderNumber: `VC-${Date.now()}`,
      customerName: order.customerName,
      customerEmail: order.customerEmail,
      items: order.items.map(item => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        subtotal: item.price * item.quantity
      })),
      totalAmount: order.totalAmount,
      orderDate: order.orderDate,
      timestamp: new Date().toISOString(),
      status: 'completed'
    };
    
    res.json({
      success: true,
      message: 'Order placed successfully',
      data: receipt
    });
  } catch (error) {
    console.error('Error processing checkout:', error);
    res.status(500).json({
      success: false,
      message: 'Error processing checkout',
      error: error.message
    });
  }
});

// GET /api/checkout/orders - Get all orders (for testing)
router.get('/orders', async (req, res) => {
  try {
    const userId = 'mock-user-1';
    const orders = await Order.find({ userId }).sort({ createdAt: -1 });
    
    res.json({
      success: true,
      data: orders
    });
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching orders',
      error: error.message
    });
  }
});

module.exports = router;
