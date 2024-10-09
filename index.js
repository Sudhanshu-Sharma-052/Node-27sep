const express = require('express');    //1
const connect = require('./connection')//2
const book = require('./routes/book'); //3
const app = express();                 //1
connect();                             //2
app.use(book)                          //3




app.listen(3000, (err)=>{
    if(err){
        console.log(err)
    } else{
        console.log("server is running on 3000")
    }
})

//1//