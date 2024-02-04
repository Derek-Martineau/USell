const express = require("express");
const router = express.Router();
const Product = require('../models/productModel'); // Correct import statement
const { productValidation } = require('../models/productValidator'); // Correct import statement

router.post('/create', async (req, res) => {
    // Validate the request body using the productValidation schema
    console.log('Incoming request body:', req.body);
    const validationResult = productValidation(req.body);
  
    if (validationResult.error) {
      // Modify the error response to include the specific validation error message
      const errorMessage = validationResult.error.errors[0].message;
      return res.status(400).send({ message: `Validation error: ${errorMessage}` });
    }

    const {
        User,
        Title,
        Description,
        photos,
        Category,
        Condition,
        Price,
        Location,
    } = req.body;

    const createProduct = new Product({
        User,
        Title,
        Description,
        photos,
        Category,
        Condition,
        Price,
        Location,
    });

    try {
        // Save the product to the database
        const savedProduct = await createProduct.save();
        res.status(201).send(savedProduct);
    } catch (error) {
        res.status(500).send({ message: "Error trying to create product", error });
    }
});

module.exports = router;
