//hoisted
//var
console.log(a); // will print undefined
var a = 10;
console.log(a); // 10

//let example, but const will be the same
//console.log(b); //error
let b = 5;
console.log(b);

//function Hoisted
greet(); // Print "Hello!"
function greet() {
  console.log("Hello!");
}

//primitive type
let d = 5;
let c = d; // copy the value
c = 10;
console.log(d); // 5 (not affected)
console.log(c); // 10

//reference type
let obj1 = { name: "Alice" };
let obj2 = obj1; // copy the reference, not the object, that menas obj2 also point to name:alice
obj2.name = "Bob";
console.log(obj1.name); // "Bob" (obj1 changed too!)

//coercion
console.log("5" + 1); // "51"

console.log(5 == "5"); // true
console.log(5 === "5"); // false

//if else
let i = 1;
if (i === 0) {
  console.log("wrong");
} else if (i === 1) {
  console.log("match");
} else {
  console.log("no idea");
}

//loops: for, while, switch
// continue: will skip this iteration if case match
// break: exit the loop

//for loop, print 1,2
for (let i = 0; i < 3; i += 1) {
  console.log(i);
}

//while, will print 2,1
let j = 2;
while (j > 0) {
  console.log(j);
  j -= 1;
}

//continue
for (let i = 0; i < 3; i += 1) {
  if (i === 1) {
    continue; //only print 0,2
  }
  console.log(i);
}

//break
for (let i = 0; i < 3; i += 1) {
  if (i === 1) {
    break; //only print 0
  }
  console.log(i);
}
