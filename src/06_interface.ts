// interface User{
//     readonly _id:string,
//     email:string,
//     userId:number,
//     // googleId?:string,
//     startTrail():string,
//     // getCoupen(coupanName:string,value:number):number
// }

// const naveed:User={_id:"43534rewr3w",email:"naveed@gmail.com",userId:232,
//   startTrail:()=>{return "fdsg"},
// //   getCoupen
// }

interface Geeks {
  name: string;
  age: number
}
 
interface Geeks {
  email: string;
}
 
// Using the merged type
const gfg: Geeks = {
  name: " kgowda",
  age: 20,
  email: " kgowda@gmail.com"
};
 
console.log(gfg);


export{}