// For-of Loop: (String & Arrays)

// let str = "Javascript";
// let len = 0;

// for (let i of str)
// {
//     len++;
//     console.log(i);
// }
// console.log("Length of", str,":", len);



// For-in Loop: (Objects)

let Student = 
{
    Name: "Tamim Iqbal",
    Age : 22,
    Cgpa: 3.9,
    isPassed: true
}

for (let key in Student)
{
    console.log(key, ":", Student[key]);
}