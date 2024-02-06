const express = require("express");
const router = express.Router();
const Product = require('../models/productModel'); 

//Delete All Products
router.post('/deleteAll', async (req, res) => {
    const products = await Product.deleteMany();
    return res.json(products)
});

//Delete All Product
router.delete('/deleteOne/:productId', async (req, res) => {
    try {
        const products = await Product.findByIdAndRemove(req.params.productId);
        if (products) {
            res.status(204).end;
        } else {
            res.status(404).json({ message: 'Result not found' }); //productId not found
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;