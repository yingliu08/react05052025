const people = {
  1: { name: "Alice", age: 25 },
  2: { name: "Bob", age: 30 },
  3: { name: "Charlie", age: 35 },
};

// get the average age of the people
export const getAverageAge = (people) => {
  let total = 0;
  let res = 0;
  for (const [key, value] of Object.entries(people)) {
    total += value.age;
    res = total / key;
  }
  return res;
};
