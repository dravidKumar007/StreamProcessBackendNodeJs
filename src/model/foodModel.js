const mongoose = require('mongoose');

// Define schema
const orderItemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  ratings: Number,
  price: Number,
  images: [
    {
      public_id: String,
      url: String
    }
  ],
  stock: Number,
  numOfReviews: Number,
  reviews: [
    {
      name: String,
      rating: Number,
      Comment: String
    }
  ],
  createdAt: { type: Date, default: Date.now }
}, { collection: 'foodItems' });

// Create model
const foodItem = mongoose.model('foodItems', orderItemSchema);

// Export model
module.exports = { foodItem };
