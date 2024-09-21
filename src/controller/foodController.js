const { foodItem } = require('../model/foodModel');

exports.getFoodDetails = async (req, res) => {
    try {
      // Extract pagination parameters from route parameters
      const page = parseInt(req.params.page) || 1;
      const limit = parseInt(req.params.limit) || 10;
  
      // Calculate the number of items to skip
      const skip = (page - 1) * limit;
  
      // Fetch the paginated order items
      const orderItems = await foodItem.find().skip(skip).limit(limit);
  
      // Get the total number of items
      const totalItems = await foodItem.countDocuments();
  
      // Calculate the total number of pages
      const totalPages = Math.ceil(totalItems / limit);
  
      // Send the response with paginated data
      res.status(200).json({
        page,
        limit,
        totalPages,
        totalItems,
        orderItems
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  exports.getFoodDetailsSearch = async (req, res) => {
    try {
      // Extract pagination parameters from route parameters
      const page = parseInt(req.params.page) || 1;
      const limit = parseInt(req.params.limit) || 10;
      const searchQuery = req.params.search || ''; // Extract search term from route parameters
  
      // Calculate the number of items to skip
      const skip = (page - 1) * limit;
  
      // Construct the search filter using $regex for case-insensitive matching
      const filter = {
        name: { $regex: searchQuery, $options: 'i' } // Assuming the field to search is 'name'
      };
  
      // Fetch the paginated and filtered food items
      const orderItems = await foodItem.find(filter).skip(skip).limit(limit);
  
      // Get the total number of items matching the search query
      const totalItems = await foodItem.countDocuments(filter);
  
      // Calculate the total number of pages
      const totalPages = Math.ceil(totalItems / limit);
  
      // Send the response with paginated and filtered data
      res.status(200).json({
        page,
        limit,
        totalPages,
        totalItems,
        orderItems
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  exports.getFoodid = async (req, res) => {
    try {
      const search = req.params.search; // Extract search term from route parameter
      const item = await foodItem.findById(search); // Search for item by ID
      
      if (!item) {
        return res.status(404).json({ message: 'Item not found' });
      }
  
      res.status(200).json(item);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };