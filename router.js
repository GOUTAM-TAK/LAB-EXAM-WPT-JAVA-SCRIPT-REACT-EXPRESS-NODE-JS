const express = require('express');
const router = express.Router();

const ProductService = require('../Service/ProductService');

router.get('/products',(req,res) => {
    res.send(ProductService.getAllProducts());
}
    )
    router.post('/products',(req,res)=>{
         ProductService.addProduct(req.body);
        res.status(200).send("successfully added product");
    });
    module.exports = router;