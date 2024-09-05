
let team1 = ["Messi", "Neymar", "Alvarez"];
let team2 = ["Ronaldo", "Suarez", "Xavi"];

// Concat() : Joins multiple arrays
let team = team1.concat(team2);
console.log(team);
console.log(team1);
console.log(team2);

// Unshift : Add to start
team.unshift("D Maria");
console.log(team);

// Shift : Remove from start
team.shift();
console.log(team);