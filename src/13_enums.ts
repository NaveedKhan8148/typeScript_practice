enum Role{
    user ='user',
    admin ='admin'
}

type logindetails ={
    name?:string;
    email:string;
    age:number;
    role:Role;
}

const user1:logindetails={
    name:"khan",
    email:"khan@gmail.com",
    age:25,
    role:Role.admin
}

const user2:logindetails={
    name:"naveed",
    email:"naveed@gmail.com",
    age:25,
    role:Role.user
}

const isAdmin = (user1:logindetails)=>{
  const  {email,age ,role,name}=user1 
 return  role === "admin"? `this is admin ${name}` :`this is user ${name}`

}

console.log(isAdmin(user2))