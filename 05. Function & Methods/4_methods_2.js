// Reduce : Performs some operations & reduces the array to a single value. It returns the single value.

// let array = [1, 2, 3, 4];

// const output = array.reduce((prev, cur) => {
//     return prev + cur;
// });

// console.log(output);


// Largest Number 
let arr = [3, 8, 1, 4, 11, 2];

const largest = arr.reduce((prev, cur) => {
    return prev > cur ? prev : cur;
});

console.log(largest);