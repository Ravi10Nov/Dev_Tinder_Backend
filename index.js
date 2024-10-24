const express = require('express');

const app = express();

const login = require("./src/api/auth");

// app.use('/',(req,res)=>{
//     res.send("Welcome to Dev Tinder API")
// })

app.get("/login",login);


app.listen(7777 ,()=>{
    console.log("App is running on port 7777")
})