const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

//database connection 
mongoose.connect(process.env.MONGO_URI,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
})
.then(()=>console.log(`[database] DB connected in ${process.env.NODE_ENV} mode`))
.catch((err)=>console.log(`DB connection failed in ${process.env.NODE_ENV} mode \n`,err));

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

// import routes
const authRoute=require("./routes/auth.route");

//use routes
app.use("/auth",authRoute);  


const port = process.env.PORT ?? 5000

/*app.get('/', (req, res) => res.send('Hello World!')) */
app.listen(port, () => console.log(`Example app listening on port ${port} in ${process.env.NODE_ENV}`))