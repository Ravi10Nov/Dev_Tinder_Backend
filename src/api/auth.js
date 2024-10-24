const express = require('express');

const authRouter = express.Router();

router.get('/login',(req,res)=>{
    res.send('Login successful.')
})

module.exports = authRouter;