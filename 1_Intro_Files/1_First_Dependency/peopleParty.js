const faker = require("faker");
const Student = require("../Student");

// console.log("====================================");
// console.log("message:", Student);
// console.log("====================================");

// console.log("====================================");
// console.log(faker.name.firstName(), faker.name.lastName());
// console.log("====================================");

let students = [];

for (let i = 0; i < 10; i++) {
  //   console.log("====================================");
  //   console.log(faker.name.firstName(), faker.name.lastName());
  //   console.log("====================================");
  //   console.log("====================================");
  //   console.log(faker.name.findName());
  //   console.log("====================================");
  const student = new Student(faker.name.findName());
  //   console.log("====================================");
  //   console.log(student.name);
  //   console.log("====================================");
  students.push(student.name);
}
console.log("====================================");
console.log(students);
console.log("====================================");
