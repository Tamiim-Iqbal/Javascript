let pc = ["keyboard", "mouse", "speaker", "monitor"];
console.log(pc);

// Slice : Return a piece of array
console.log(pc.slice(0,3));                   //0 to 2
console.log(pc.slice(1));                     //1 to end

// Splice(startIdx, dltCount, newEl) : Change original array  (Add, Remove, Replace)
let num = [0, 1, 2, 3, 4, 5, 6, 7];

num.splice(2, 1, 10);
console.log(num);