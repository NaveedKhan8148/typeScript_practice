type Student ={
    name:string;
    address:string ;
    greet:(country:string)=>string
    // OR
    // greet():string
}

const student:Student={
    name:"naveed",
    address:"peshwar",
    greet:(country):string=>`welcome ${student.name} and your name is ${student.address}`
    
}