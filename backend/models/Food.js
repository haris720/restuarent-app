const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide food name'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Please provide description'],
    trim: true
  },
  price: {
    type: Number,
    required: [true, 'Please provide price'],
    min: 0
  },
  category: {
    type: String,
    enum: ['Appetizer', 'Main Course', 'Dessert', 'Beverage', 'Salad', 'Pizza', 'Burger', 'Pasta'],
    default: 'Main Course'
  },
  image: {
    type: String,
    default: 'default-food.jpg'
  },
  available: {
    type: Boolean,
    default: true
  },
  rating: {
    type: Number,
    default: 4.5,
    min: 0,
    max: 5
  },
  preparationTime: {
    type: Number,
    default: 30,
    comment: 'Time in minutes'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Food', foodSchema);
