"use strict";
/* In Typescript, Type aliases is a way to give  */
const product = {
    name: "car",
    price: 900000,
    qty: 4,
};
function caluculateTotalprice(product) {
    return product.price * product.qty;
}
console.log(caluculateTotalprice);
