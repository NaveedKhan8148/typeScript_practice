"use strict";
var Role;
(function (Role) {
    Role["user"] = "user";
    Role["admin"] = "admin";
})(Role || (Role = {}));
const user1 = {
    name: "khan",
    email: "khan@gmail.com",
    age: 25,
    role: Role.admin
};
const user2 = {
    name: "naveed",
    email: "naveed@gmail.com",
    age: 25,
    role: Role.user
};
const isAdmin = (user1) => {
    const { email, age, role, name } = user1;
    return role === "admin" ? `this is admin ${name}` : `this is user ${name}`;
};
console.log(isAdmin(user2));
