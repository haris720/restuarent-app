const express = require('express');
const router = express.Router();
const Food = require('../models/Food');
const authMiddleware = require('../middleware/auth');

// @route   GET /api/food
// @desc    Get all food items
// @access  Public
router.get('/', async (req, res) => {
  try {
    const { category, search } = req.query;
    let query = {};

    // Filter by category
    if (category) {
      query.category = category;
    }

    // Search by name
    if (search) {
      query.name = { $regex: search, $options: 'i' };
    }

    const foods = await Food.find(query).sort({ createdAt: -1 });

    res.json({
      success: true,
      count: foods.length,
      data: foods
    });
  } catch (error) {
    console.error('Get foods error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error while fetching food items' 
    });
  }
});

// @route   GET /api/food/:id
// @desc    Get single food item
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const food = await Food.findById(req.params.id);

    if (!food) {
      return res.status(404).json({ 
        success: false, 
        message: 'Food item not found' 
      });
    }

    res.json({
      success: true,
      data: food
    });
  } catch (error) {
    console.error('Get food error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error while fetching food item' 
    });
  }
});

// @route   GET /api/food/category/list
// @desc    Get all categories
// @access  Public
router.get('/category/list', async (req, res) => {
  try {
    const categories = await Food.distinct('category');
    
    res.json({
      success: true,
      data: categories
    });
  } catch (error) {
    console.error('Get categories error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error while fetching categories' 
    });
  }
});

module.exports = router;
