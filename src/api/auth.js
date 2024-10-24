const express = require('express');

const authRouter = express.Router();

router.post('/login',(req,res)=>{
    res.send('Login successful.')
})

module.exports = authRouter;