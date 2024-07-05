const express = require("express");
const cors = require('cors');
const mysql = require('mysql');

const app = express()
app.use(cors ());

app.get("/api", (req,res) =>{
    return res.json({message: "This is from backend"});
    })

app.listen(8080, ()=> {
    console.log("hello");
})