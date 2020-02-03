const cowsay = require("cowsay");

console.log("====================================");
console.log(
  cowsay.say({
    text: "I'm a module",
    e: "Oo",
    T: "U"
  })
);
console.log("====================================");

console.log("====================================");
console.log(
  cowsay.think({
    text: "I may not be a module, but I am",
    e: "o O",
    T: "D"
  })
);
console.log("====================================");
