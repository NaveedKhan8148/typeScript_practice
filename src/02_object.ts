let  myObject1 ={
    name : "naveed",
    email: "naveed@gmail.com",
    isValid:true
}

function createUser({name,ispaid}:{name:string, ispaid:boolean}){}
let newUser ={name:"naveed" , ispaid:true}
createUser(newUser)



////////////////////////////////////////////////

// how the type can be used 
//  type User={
//     name:string;
//     email:string;
//     isActive:boolean;
//  }

//  function createNewuser(user:User):User{
//     return {name:"",email:"",isActive:true}
//  }
//  createNewuser({name:"",email:"",isActive:true})


// ///////////////////////////////////////////////////////
// // object with return type

// function createUserTwo():{name:string,phone:number}{
//  return {name:"naveed", phone:32432543232432}
// }




// type newUser={
//   readonly _id:string
//     name:string
//    email:string
//    isActive:boolean
// //    creaditCardDeatils:number 
// }

// let copyUser:newUser = {
//      _id:"3243254n3232k432",
//      name:"naveed",
//      email:"naveed@gmail.com",

//     isActive:true
//     }

export{}