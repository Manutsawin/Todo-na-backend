const { urlencoded } = require('express')
const express = require('express')
const app = express();
const routers=require('./routes');
const mongoose=require('mongoose');
const cors = require("cors")

app.use(cors());
app.use(express.json(urlencoded({extended:true})))

mongoose.connect("mongodb+srv://Manutsawin:kirito369@cluster0.bkl8e.mongodb.net/todona?retryWrites=true&w=majority",{useNewUrlParser: true}).then(()=>{
    console.log("Database connected");
})

app.use("/api",routers);


app.listen(process.env.PORT||1000,()=>{
    console.log('Server start')
})