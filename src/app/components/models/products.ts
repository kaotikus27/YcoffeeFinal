export class featureProducts{
    category:string;
    productId:number;
    productSrc: string;
    productDescription:string;
    productName:string;
    productPrice:number;
    productQnty:number;
    productSize:string;
    constructor(
        category: string = "",
        productId:number = 0,
        productSrc: string = "",
        productDescription:string= "",
        productName:string = "" ,
        productPrice:number= 0,
        productQnty:number= 0,
        productSize:string= "",
    )
    {
        this.category = category;
        this.productId = productId;
        this.productSrc = productSrc;
        this.productName = productName;
        this.productDescription= productDescription;
        this.productPrice = productPrice;
        this.productQnty = productQnty;
        this.productSize = productSize;
    }
    
}