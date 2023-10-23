"use strict";
// generic in typescript allow you to create reusable components or function that can works with multiple data types 
function logAndreturn(val) {
    return val;
}
const reslut = logAndreturn(34); //this number is for best practice or optinal 
const result2 = logAndreturn("hello generics "); //this string is for best practice or optinal 
