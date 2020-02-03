const greetings = greeting => {
  console.log("====================================");
  console.log(greeting);
  console.log("====================================");
};

greetings("hello");
// node --name of file .js-- to see it in the terminal

greetingTwo();

function greetingTwo() {
  console.log("====================================");
  console.log("hoisting works");
  console.log("====================================");
}
