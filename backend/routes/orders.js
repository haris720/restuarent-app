const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const authMiddleware = require('../middleware/auth');

// @route   POST /api/orders
// @desc    Create a new order
// @access  Private
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { items, totalAmount, deliveryAddress, phone, specialInstructions } = req.body;

    // Validate items
    if (!items || items.length === 0) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please add items to your order' 
      });
    }

    // Create order
    const order = new Order({
      user: req.user._id,
      items,
      totalAmount,
      deliveryAddress: deliveryAddress || req.user.address,
      phone: phone || req.user.phone,
      specialInstructions
    });

    await order.save();

    // Populate food details
    await order.populate('items.food');

    res.status(201).json({
      success: true,
      message: 'Order placed successfully',
      data: order
    });
  } catch (error) {
    console.error('Create order error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error while creating order' 
    });
  }
});

// @route   GET /api/orders
// @desc    Get user's orders
// @access  Private
router.get('/', authMiddleware, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id })
      .populate('items.food')
      .sort({ orderDate: -1 });

    res.json({
      success: true,
      count: orders.length,
      data: orders
    });
  } catch (error) {
    console.error('Get orders error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error while fetching orders' 
    });
  }
});

// @route   GET /api/orders/:id
// @desc    Get single order
// @access  Private
router.get('/:id', authMiddleware, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate('items.food')
      .populate('user', 'name email');

    if (!order) {
      return res.status(404).json({ 
        success: false, 
        message: 'Order not found' 
      });
    }

    // Check if order belongs to user
    if (order.user._id.toString() !== req.user._id.toString()) {
      return res.status(403).json({ 
        success: false, 
        message: 'Not authorized to view this order' 
      });
    }

    res.json({
      success: true,
      data: order
    });
  } catch (error) {
    console.error('Get order error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error while fetching order' 
    });
  }
});

// @route   PUT /api/orders/:id/cancel
// @desc    Cancel an order
// @access  Private
router.put('/:id/cancel', authMiddleware, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ 
        success: false, 
        message: 'Order not found' 
      });
    }

    // Check if order belongs to user
    if (order.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ 
        success: false, 
        message: 'Not authorized to cancel this order' 
      });
    }

    // Check if order can be cancelled
    if (order.status === 'Delivered' || order.status === 'Cancelled') {
      return res.status(400).json({ 
        success: false, 
        message: 'Cannot cancel this order' 
      });
    }

    order.status = 'Cancelled';
    await order.save();

    res.json({
      success: true,
      message: 'Order cancelled successfully',
      data: order
    });
  } catch (error) {
    console.error('Cancel order error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error while cancelling order' 
    });
  }
});

module.exports = router;
