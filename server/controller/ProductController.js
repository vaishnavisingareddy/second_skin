const ProductModel = require("../model/ProductModel");
module.exports.createProduct = async (req, res)=>{
    const newProduct = new ProductModel(req.body);
   
    try{
        
        const saveProduct = await newProduct.save();

        res.status(200).send({
            status:true,
            saveProduct,
        })
    }catch(err){
        res.status(500).send({
            status:false,
            err,
        });
    }
}


module.exports.getAllProduct = async (req, res)=>{
    const catName = req.query.category;
    try {
        let products;

        if(catName){
            products = await ProductModel.find({
                category: {
                    $in: [catName],
                },
            });
        }else{
            products = await ProductModel.find();
        }

        res.status(200).send({
            status:true,
            products
        });
    } catch (error) {
        res.status(500).send({
            status:false,
            error,
        });
    }
}