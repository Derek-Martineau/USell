const express = require("express");
const app = express();
const cors = require('cors')
const imagesRoute = require('./routes/images');
const loginRoute = require('./routes/userLogin')
const getAllUsersRoute = require('./routes/userGetAllUsers')
const registerRoute = require('./routes/userSignUp')
const getUserByIdRoute = require('./routes/userGetUserById')
const dbConnection = require('./config/db.config')
const editUser = require('./routes/userEditUser')
const deleteUser = require('./routes/userDeleteAll')
const productCreate = require('./routes/productCreate')
const productGet = require('./routes/productRead')
const productDelete = require('./routes/productDelete')
const productUpdate = require('./routes/productUpdate')
const adminTrue = require('./routes/userAdmin');

require('dotenv').config();
const SERVER_PORT = 8081

dbConnection()
app.use(cors({origin: '*'}))
app.use(express.json())
app.use('/user', loginRoute)
app.use('/user', registerRoute)
app.use('/user', getAllUsersRoute)
app.use('/user', getUserByIdRoute)
app.use('/user', editUser)
app.use('/user', deleteUser)
app.use('/product', productCreate)
app.use('/product', productGet)
app.use('/product', productDelete)
app.use('/product', productUpdate)
app.use('/images', imagesRoute)
app.use('/admin', adminTrue);

app.listen(SERVER_PORT, (req, res) => {
    console.log(`The backend service is running on port ${SERVER_PORT} and waiting for requests.`);
})
