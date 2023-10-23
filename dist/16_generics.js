"use strict";
// * Generics in TypeScript allow you to create reusable components or 
//functions that can work with multiple data types.
Object.defineProperty(exports, "__esModule", { value: true });
// function logAndReturn(value: number |string) : number | string | boolean {
// console.log(value) ;
// return value;
// }
// const numberResult =	logAndReturn(42) ;
// const stringResult=	logAndReturn( " Hello, Generics !")
// const booleanResult = logAndReturn(true) ;
// console.log(numberResult) ;
// console.log(stringResult) ; 
// console.log( booleanResult) ;
// Generic function to log and return an input value
//it handle the function overloading very esaly 
function logAndReturn(value) {
    return value;
}
// Using the generic function with different types
const numberResult = logAndReturn(42);
const stringResult = logAndReturn("Hello, Generics ! Il");
const booleanResult = logAndReturn(true);
console.log(numberResult);
console.log(stringResult);
console.log(booleanResult);
