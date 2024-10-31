export class products{
    productId:number;
    image: string;
    name:string;
    description:string;
    price:number;
    qnty:number;
    size:string;

    constructor(
        productId:number = 0,
        image: string = "",
        name:string = "" ,
        description:string= "",
        price:number= 0,
        qnty:number= 0,
        size:string= "",
    )
    {
        this.productId = productId;
        this.image = image;
        this.name = name;
        this.description = description;
        this.price = price;
        this.qnty = qnty;
        this.size = size;
    }
    
}