// db.config.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

mongoose.set('strictQuery', false);

module.exports = () => {
    const databaseParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        retryWrites: false,
        w: 'majority',
        ssl: true
    };

    try {
        mongoose.connect(process.env.DB_URL, databaseParams);
        console.log("The backend has connected to the MongoDB database.");
    } catch (error) {
        console.log(`${error} could not connect`);
    }
};


