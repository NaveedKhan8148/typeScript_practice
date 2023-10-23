// generic in typescript allow you to create reusable components or function that can works with multiple data types 


function logAndreturn <T>(val:T){
return val;
}


const reslut = logAndreturn<number>(34); //this number is for best practice or optinal 
const result2 =logAndreturn<string>("hello generics ")//this string is for best practice or optinal 