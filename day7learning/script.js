//arrow function
const add = (x, y) => {
  return x + y;
};
console.log(add(1, 2));

//clousre, also high order funtion
function outer() {
  let x = 0;
  return function inner(y) {
    return x + y;
  };
}
const outerreturn = outer();
console.log(outerreturn); //output: function inner(y) {return x + y;};
console.log(outerreturn(4)); //6

//IIFE
(function foo() {
  console.log("I run immediately!");
})();

//curry
const add1 = (x) => (y) => {
  return x + y;
};
console.log(add1(1)); //outpt:(y) => {return x + y;}
console.log(add1(1)(11)); //output: 12
