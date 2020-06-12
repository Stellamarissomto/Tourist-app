const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

// load dotenv file 
dotenv.config({path: './config/config.env'});


const app = express(); 
app.use(express.json()); // body parser

// adding morgan logger
if (process.env.NODE_ENV ==='development') {
    app.use(morgan('dev'));
}

// setting up the server
const PORT = process.env.PORT || 4000

const server = app.listen(PORT, 
    console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`) );


    // handle unhanled promise rejections
process.on('unhandledRejection', (err, Promise) => {
    console.log(`Error: ${err.message}`);
    // close server 

    server.close(() => process.exit(1));
});