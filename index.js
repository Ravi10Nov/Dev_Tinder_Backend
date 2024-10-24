const express = require('express');

const app = express();

const connectDB = require('./src/config/database');

const login = require("./src/api/auth");

app.get("/login",login);


connectDB()
    .then(() => {
        console.log('Database connection established...');
        app.listen(7777, () => {
            console.log('App is running on port at 7777');
        });
    })
    .catch((err) => {
        console.error('Database can not be connected')
    });
