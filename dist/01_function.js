"use strict";
function addTwo(num) {
    return num + 3;
}
addTwo(23);
function getUperCase(val) {
    return val.toUpperCase();
}
getUperCase("naveed");
function signUpUser(name, email, isPaid) {
}
signUpUser("naveeed", "naveed@gmail.com", true);
let loginUer = (name, email, isPaid = true) => { };
loginUer("naveed", "naveed@gmail.com");
// to also return the same type of the value 
function getTheExacttypeOfTheValue(name) {
    return "naveed";
}
////////////////////////////////////////////////////////////
let heros = ['naveed', 'mudasir', 'abdeen'];
heros.map((hero) => {
    return `the name is ${hero}`;
});
