const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');
const Product = require('../models/Product');

// GET /api/cart - Get cart with total
router.get('/', async (req, res) => {
  try {
    const userId = 'mock-user-1';
    let cart = await Cart.findOne({ userId });
    
    if (!cart) {
      cart = new Cart({ userId, items: [], totalAmount: 0 });
      await cart.save();
    }
    
    res.json({
      success: true,
      data: {
        items: cart.items,
        totalAmount: cart.totalAmount,
        itemCount: cart.items.reduce((sum, item) => sum + item.quantity, 0)
      }
    });
  } catch (error) {
    console.error('Error fetching cart:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching cart',
      error: error.message
    });
  }
});

// POST /api/cart - Add item to cart
router.post('/', async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    
    // Validation
    if (!productId || !quantity || quantity < 1) {
      return res.status(400).json({
        success: false,
        message: 'Product ID and valid quantity are required'
      });
    }
    
    // Check if product exists
    const product = await Product.findOne({ id: productId });
    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found'
      });
    }
    
    // Check stock
    if (product.stock < quantity) {
      return res.status(400).json({
        success: false,
        message: 'Insufficient stock'
      });
    }
    
    const userId = 'mock-user-1';
    let cart = await Cart.findOne({ userId });
    
    if (!cart) {
      cart = new Cart({ userId, items: [] });
    }
    
    // Check if item already in cart
    const existingItemIndex = cart.items.findIndex(
      item => item.productId === productId
    );
    
    if (existingItemIndex > -1) {
      // Update quantity
      cart.items[existingItemIndex].quantity += quantity;
    } else {
      // Add new item
      cart.items.push({
        productId: product.id,
        name: product.name,
        price: product.price,
        quantity: quantity,
        image: product.image
      });
    }
    
    await cart.save();
    
    res.json({
      success: true,
      message: 'Item added to cart',
      data: {
        items: cart.items,
        totalAmount: cart.totalAmount,
        itemCount: cart.items.reduce((sum, item) => sum + item.quantity, 0)
      }
    });
  } catch (error) {
    console.error('Error adding to cart:', error);
    res.status(500).json({
      success: false,
      message: 'Error adding to cart',
      error: error.message
    });
  }
});

// PUT /api/cart/:productId - Update item quantity
router.put('/:productId', async (req, res) => {
  try {
    const { quantity } = req.body;
    const productId = parseInt(req.params.productId);
    
    if (!quantity || quantity < 1) {
      return res.status(400).json({
        success: false,
        message: 'Valid quantity is required'
      });
    }
    
    const userId = 'mock-user-1';
    const cart = await Cart.findOne({ userId });
    
    if (!cart) {
      return res.status(404).json({
        success: false,
        message: 'Cart not found'
      });
    }
    
    const itemIndex = cart.items.findIndex(item => item.productId === productId);
    
    if (itemIndex === -1) {
      return res.status(404).json({
        success: false,
        message: 'Item not found in cart'
      });
    }
    
    cart.items[itemIndex].quantity = quantity;
    await cart.save();
    
    res.json({
      success: true,
      message: 'Cart updated',
      data: {
        items: cart.items,
        totalAmount: cart.totalAmount,
        itemCount: cart.items.reduce((sum, item) => sum + item.quantity, 0)
      }
    });
  } catch (error) {
    console.error('Error updating cart:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating cart',
      error: error.message
    });
  }
});

// DELETE /api/cart/:productId - Remove item from cart
router.delete('/:productId', async (req, res) => {
  try {
    const productId = parseInt(req.params.productId);
    const userId = 'mock-user-1';
    
    const cart = await Cart.findOne({ userId });
    
    if (!cart) {
      return res.status(404).json({
        success: false,
        message: 'Cart not found'
      });
    }
    
    cart.items = cart.items.filter(item => item.productId !== productId);
    await cart.save();
    
    res.json({
      success: true,
      message: 'Item removed from cart',
      data: {
        items: cart.items,
        totalAmount: cart.totalAmount,
        itemCount: cart.items.reduce((sum, item) => sum + item.quantity, 0)
      }
    });
  } catch (error) {
    console.error('Error removing from cart:', error);
    res.status(500).json({
      success: false,
      message: 'Error removing from cart',
      error: error.message
    });
  }
});

// DELETE /api/cart - Clear entire cart
router.delete('/', async (req, res) => {
  try {
    const userId = 'mock-user-1';
    const cart = await Cart.findOne({ userId });
    
    if (cart) {
      cart.items = [];
      await cart.save();
    }
    
    res.json({
      success: true,
      message: 'Cart cleared',
      data: {
        items: [],
        totalAmount: 0,
        itemCount: 0
      }
    });
  } catch (error) {
    console.error('Error clearing cart:', error);
    res.status(500).json({
      success: false,
      message: 'Error clearing cart',
      error: error.message
    });
  }
});

module.exports = router;
