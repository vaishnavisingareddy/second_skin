const express = require('express');
const mongoose = require("mongoose");
const ProductRoutes = require("./routes/ProductRoutes");
const dotenv = require("dotenv");
const cors = require("cors");
const path=require('path')
const app = express();
const PORT = 3000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:false})); app.use("/api", ProductRoutes);


app.use(express.static(path.join(__dirname,'../build')))
app.get("*",function(req,res){
    res.sendFile(path.join(__dirname,'../build/index.html'))
})

dotenv.config(); mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
})
    .then(console.log("Connected to mongoDB..."))
    .catch((err) => {
        console.log("MongoDB connection failed!",
            err,
        )
    });

app.listen(PORT, (req, res) => {
    try {
        console.log("Backend is running on port:", PORT);
    } catch (err) {
        err
    }
});