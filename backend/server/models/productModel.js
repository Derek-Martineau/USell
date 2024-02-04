const mongoose = require("mongoose");
const axios = require('axios');

const locationSchema = new mongoose.Schema({
    zipCode: {
      type: String,
      required: true,
    },
  });

  locationSchema.pre('save', async function (next) {
    try {
        const response = await axios.get(`https://api.zippopotam.us/us/${this.zipCode}`);
        const { places, state } = response.data;
        next();
    } catch (error) {
        // Handle the error, send an appropriate response to the client, or log it
        console.error("Error fetching location data:", error);
        next(error);
    }
});

const productSchema = new mongoose.Schema({
  Date: {
    type: Date,
    default: Date.now,
    required: false,
    label: "date of when product was listed"
},
        User: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'users',
          required: true, 
          label: "name of user who created listing"
      },      
      Title: {
        type: String,
        required: true,  
        label: "product title"
    },    
        Description: {
            type: String,
            max: 250,
            label: "product description"
        },
        Photos: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Image',
            label: "product image"
        }],
        Category: {
            type: String,
            required: true,
            label: "product category"
        },
        Condition:{
            type: String,
            required: true,
            label: "condition of product"
        },
        Price: {
            type: Number,
            required: true,
            label: "price product is listed for"
        },
        Location: locationSchema,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;