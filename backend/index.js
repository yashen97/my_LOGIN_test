const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

//database connection 

//middleware

// import routes

//use routes

const app = express();
const port = process.env.PORT ?? 3000

/*app.get('/', (req, res) => res.send('Hello World!')) */
app.listen(port, () => console.log(`Example app listening on port ${port} in ${process.env.NODE_ENV}`))