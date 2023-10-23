const person :{
    name:string;
   
    email:string;
    phone:string;
    country:{
        city:string;
        zipcode:number;
    }
}={
    name:"naveed",
    email:"naveed@gmail.com",
    phone:'23432432',
    country:{
        city:"peshawar",
        zipcode:32432,
    },

}


console.log(person.country.city)

export {}