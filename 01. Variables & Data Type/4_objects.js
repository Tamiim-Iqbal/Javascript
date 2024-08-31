const student = {
    fullName : "Tamim Iqbal",
    id : 22,
    isPassed : true
}

console.log(student);                         //output: { fullName: 'Tamim Iqbal', id: 22, isPassed: true }
console.log(typeof student);                  //output: object

// Key Access: 
console.log(student.fullName);                //output: Tamim Iqbal
console.log(student["id"]);                   //output: 22

// Value Change: 
student.id = 24;
console.log(student.id);                      //output: 24
