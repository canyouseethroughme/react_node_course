class Student {
  // to create a class in js
  classes = []; // fields
  constructor(name1) {
    // constructors
    this.name = name1;
    // this.classes = [];
  }
  addClass(studentClass) {
    // methods
    this.classes.push(studentClass);
  }
}

const student = new Student("Lars"); // to create an object from class student
student.addClass("React+Node");
student.addClass("Svelte+Node");

console.log("====================================");
console.log(student.classes);
console.log("====================================");

module.exports = Student;
