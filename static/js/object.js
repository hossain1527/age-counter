//object in js
//dictionaries in python

let students = {
    firstname:'Silva', 
    lastname:'junior', 
    age:34, 
    height:178, 
    weight:78,
    studentInfo: function (){
        return this.firstname + '\n' + this.lastname + '\n' + this.weight;
    }
};

console.log(students);
console.log(students.firstname);
students.age = 45;
console.log(students);
students.age++;
console.log(students.age);
console.log(students.studentInfo());
