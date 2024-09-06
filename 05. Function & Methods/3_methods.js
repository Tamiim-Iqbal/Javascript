// Map : Create a new array with the result of some operation. The value its callback returns are used to form new array.

let array = [10, 20, 30, 40, 50];

array.map((val) =>{
    console.log(val);
})

let newArray = array.map((val) =>{
    return val;
})
console.log(newArray);


// Filter : Create a new array of elements that give true for a condition/filter

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let newArr = arr.filter((val) =>{
    return val%2 === 0;
})
console.log(newArr);