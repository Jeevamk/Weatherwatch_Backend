const express = require ('express')
const app  = express();

const mongoose = require ('./server/database/connection')
const port = 5001;




app.listen(port,()=>{
    console.log(`running on port ${port}`);
})