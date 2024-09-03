// Strings

// let str = "Bangladesh";
// let str2 = "USA";

// console.log(str.length);                           //output: 10
// console.log(str2[0]);                              //output: U

// Template Literals
// let specialString = `This is a template literal`;
// console.log(specialString);
// console.log(typeof specialString);


// Uses of Template Literals
let  obj = 
{
    item : "pen",
    price : 10
}
// Normal way:
console.log("The cost of", obj.item, "is", obj.price, "$");
// Template Literals
console.log(`The cost of ${obj.item} is ${obj.price} $`);