const express = require("express");
const Product = require("../controller/ProductController");

const router = express.Router();

router.get("/",(req, res)=>{
    res.status(200).send("the-second-skin");
})
// router.post("/newproduct", Product.createProduct);
router.get("/allproducts", Product.getAllProduct);

module.exports = router;