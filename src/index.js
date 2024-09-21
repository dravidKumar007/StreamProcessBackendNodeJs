const express=require('express');
const mongoose = require('mongoose');
const cors=require('cors');
const app= express();
const foodRouter=require('../src/router/foodRouter');
app.use(express.json());
app.use(cors());
mongoose.connect('mongodb://localhost:27017/foodOrder')
    .then(() => {
    console.log('Connected to MongoDB');
  }).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


// food order details fetching api  
app.use('/api/v1/food', foodRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});