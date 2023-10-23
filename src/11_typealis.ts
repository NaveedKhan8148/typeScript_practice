/* In Typescript, Type aliases is a way to give  */


type Product  ={

    name:string;
    price:number;
    qty:number
   
}

const product:Product ={
    name:"car",
    price:900000,
    qty:4,
    
}

function  caluculateTotalprice(product:Product){
    return product.price*product.qty;

}
console.log(caluculateTotalprice);