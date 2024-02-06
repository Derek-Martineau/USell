const express = require("express");
const router = express.Router();
const Product = require('../models/productModel');

router.put('/updateProduct/:product_id', async (req, res) => {
    try {
        const productId = req.params.product_id;
        const updatedProductData = req.body;
        
        const updatedProduct = await Product.findByIdAndUpdate(productId, updatedProductData, {new: true });

        if (!updatedProduct) {
            return res.status(200).json({ message: "ProductID not found" });
        }
            return res.json(updatedProduct);
    } catch (error) {
        return res.status(500).json({ message: 'Error updating product', error: error.message });
    }
});

module.exports = router;