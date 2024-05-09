const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const newUserModel = require('../models/userModel');

// Make admin
router.put('/makeAdmin/:userId', async (req, res) => {
    const userId = req.params.userId;

    try {
        const user = await newUserModel.findById(userId);
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }

        user.isAdmin = true;
        await user.save();

        res.send({ message: "User is now an admin", user });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal Server Error" });
    }
})

module.exports = router;
