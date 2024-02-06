const express = require("express");
const router = express.Router();
const Product = require('../models/productModel'); 

router.post('/deleteAll', async (req, res) => {
    const products = await Product.deleteMany();
    return res.json(products)
});

module.exports = router;