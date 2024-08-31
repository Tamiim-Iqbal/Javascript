// var: Variable can be re-declared & updated. A global scope variable.
var age = 10;
var age = 16;
var age = 22;
console.log(age);                    //output: 22

// let: Variable cannot be re-declared but can be updated. A block scope variable.
let price = 99;
console.log(price);                //output: 99
{
    let id = 12;
    console.log(id);                 //output: 12
}
{
    let id = 23;
    console.log(id);                 //output: 23
}

// const: Variable cannot be re-declared or updated. A block scope variable
const pi = 3.1416;
console.log(pi);                     //output: 3.1416