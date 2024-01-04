class Product
{
    static cnt=0;
    constructor(productName,productPrice,expiryDate ){
        this.id=++Product.cnt;
        this.productName = productName;
        this.expiryDate = expiryDate;
        this.productPrice = productPrice;
    }
   display=()=>{
    
        return this.id+" "+this.productName+" "+this.productPrice+" "+this.expiryDate;
    }
}
class ProductService{

    static productArr = [];
    static addProduct=(obj)=>{
       
        console.log("in product service add product : "+obj)
        let product = new Product(obj.productName,obj.productPrice,obj.expiryDate);
        product.display();
        ProductService.productArr.push(product);

    }
    static getAllProducts=()=>{
        console.log("in getAllProducts service layer");
        return ProductService.productArr;
    }

}
module.exports = ProductService;