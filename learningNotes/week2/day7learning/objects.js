const obj1 = {
  1: { name: "Alice", age: 25 },
  2: { name: "Bob", age: 30 },
  3: { name: "Charlie", age: 35 },
};
//object keys
for (let key of Object.keys(obj1)) {
  console.log(key);
}
Object.keys(obj1).forEach((key) => {
  console.log(key);
});
//object entries
for (let [key, value] of Object.entries(obj1)) {
  console.log(key, value);
}

Object.entries(obj1).forEach(([key, value]) => {
  console.log(key, value);
});
