export function sum(a = 0, b = 0) {
  // write a function that takes two numbers as arguments and returns their sum
  // argument default values are 0
  // if wrong data type is passed, throw an error
  // Define your function here
  if (typeof a !== "number" || typeof b !== "number") {
    throw Error("wrong data type");
  }
  return a + b;
}

export function sumOfAll(...numbers) {
  // write a function that takes any number of arguments and returns their sum
  // should return the sum of all numbers with default values
  // if wrong data type is passed, throw an error
  // Define your function here
  const isNumber = numbers.every((number) => {
    return typeof number === "number";
  });
  if (isNumber === false) {
    throw Error("wrong data type");
  }
  const res = numbers.reduce((currentTotal, number) => {
    return currentTotal + number;
  }, 0);
  return res;
}
