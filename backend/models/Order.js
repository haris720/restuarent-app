const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  items: [{
    food: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Food',
      required: true
    },
    name: String,
    price: Number,
    quantity: {
      type: Number,
      required: true,
      min: 1,
      default: 1
    }
  }],
  totalAmount: {
    type: Number,
    required: true,
    min: 0
  },
  status: {
    type: String,
    enum: ['Pending', 'Confirmed', 'Preparing', 'Ready', 'Delivered', 'Cancelled'],
    default: 'Pending'
  },
  deliveryAddress: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  specialInstructions: {
    type: String,
    trim: true
  },
  orderDate: {
    type: Date,
    default: Date.now
  },
  deliveryTime: {
    type: Date
  }
});

module.exports = mongoose.model('Order', orderSchema);
