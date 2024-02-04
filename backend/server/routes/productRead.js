const express = require("express");
const router = express.Router();
const Product = require('../models/productModel');

router.get('/getAll', async (req, res) => {
    try {
        const products = await Product.find();
        return res.json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

module.exports = router;
