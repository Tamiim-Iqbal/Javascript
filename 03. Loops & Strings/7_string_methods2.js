// Slice(start, end?) : Returns Part of String
let str = "abcdefghijk"
console.log(str.slice(4,9));                       //output: efghi
console.log(str.slice(4));                         //output: efghijk

// Concat() : Add string at the end
let str1 = "I love ";
let str2 = "Bangladesh"; 
// let str3 = str1 + str2;
// console.log(str3);
console.log(str1.concat(str2));                    //output: I love Bangladesh

// Replace(Search_val, New,=_val)
let search = "Search it on Google, Google, Google";
console.log(search.replace("G","T"));             //output: Search it on Toogle, Google, Google

console.log(search.replaceAll("G","T"));          //output: Search it on Toogle, Toogle, Toogle

//CharAt()