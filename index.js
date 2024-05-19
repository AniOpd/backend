require('dotenv').config();
const express = require('express')
// import express from "express"; abv line and this line has same work 
const app = express()
// we can use manu things using app.
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send(' World!')
})

app.get('/twitter',(req,res)=>{
    res.send('anishChandraDAs')
})

app.get('/login',(req,res)=>{
    res.send('<h1>Enter details to login</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})