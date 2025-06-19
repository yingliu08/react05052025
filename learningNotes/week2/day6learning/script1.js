//obejct
const obj = {
  name: "Tom",
  sayName: function () {
    console.log(this.name);
  },
};
obj.sayName(); // Tom

function Person(name) {
  this.name = name;
}
// Add a method to Person's prototype
Person.prototype.sayHello = function () {
  console.log("Hello, " + this.name);
};
const p1 = new Person("John");
p1.sayHello(); // "Hello, John"

//call
function greet(greeting) {
  console.log(greeting + ", " + this.name);
}
const user = { name: "Alice" };
greet.call(user, "Hi"); //this line means call function greet to use user object and passing hi as argurment
greet.apply(user, ["Hi"]);

//object keys
const user1 = { name: "Alice", age: 25 };
Object.keys(user1).forEach((key) => {
  console.log(key + "," + user1[key]);
});
//object entries
for (const [key, value] of Object.entries(user1)) {
  console.log(key + "," + value);
}

//for each
const arr = [1, 2, 3, 4];
arr.forEach((i) => {
  console.log(i);
});
