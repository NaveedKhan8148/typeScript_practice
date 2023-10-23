function addTwo(num:number ){
    return num +3;
}
addTwo(23)

function getUperCase(val:string){
    return val.toUpperCase()
}

getUperCase("naveed");


function signUpUser(name:string, email:string,isPaid:boolean){

}

signUpUser("naveeed","naveed@gmail.com",true)


let loginUer = (name:string,email:string,isPaid:boolean=true)=>{}

loginUer("naveed","naveed@gmail.com")



// to also return the same type of the value 

function getTheExacttypeOfTheValue(name:string):string{
    return "naveed"
}




////////////////////////////////////////////////////////////

let heros =['naveed','mudasir','abdeen']

heros.map((hero):string=>{
    return `the name is ${hero}`
})
