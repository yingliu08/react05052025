// Do not use prototype methods

// Data types & numsays
export function checkIfStringIsNumber(str) {
  //   Write a function that takes a string as an argument and
  //   returns a boolean indicating if the str is a number
  //   Example:
  //   '1' -> true, "a" -> false, "1a" -> false
  if (Number(str)) {
    return true;
  } else {
    return false;
  }
}

export function findAvgOfNums(arr) {
  //   Write a function that takes an array of numbers and strings as an
  //   argument and returns the average of all the numbers.
  //   Example: const arr = [1, '2', 3, '4', 5];
  //   Expected output: 3
  let count = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (typeof arr[i] === "number") {
      sum += arr[i];
      count += 1;
    }
  }
  if (count === 0) {
    return 0;
  }
  return sum / count;
}

export function findAverageAge(people) {
  //   Write a function that takes an array of people objects as an argument and
  //   returns the average age of all the people.
  //   Do not use prototype methods
  //   Example: const people = [{name: 'John', age: 21}, {name: 'Alice', age: 25}];
  const peopleLen = Object.keys(people).length;
  if (peopleLen === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < people.length; i += 1) {
    sum += people[i].age;
  }
  return sum / peopleLen;
}

export function findAvgAgeByJob(people, job) {
  //   Write a function that takes an array of people objects as an argument and
  //   returns the average age of people with the same job.
  //   Do not use prototype methods
  //   Example: const people = [{name: 'John', age: 21, job: 'teacher'}, {name: 'Alice', age: 25, job: 'teacher'}];
  //   Expected output: 23 (teacher)
  let count = 0;
  let sum = 0;
  for (let i = 0; i < people.length; i += 1) {
    if (people[i].job === job) {
      sum += people[i].age;
      count += 1;
    }
  }
  if (count === 0) {
    return 0;
  }
  return sum / count;
}

export function findMaxNum(arr) {
  //   Write a function that takes an array of numbers as an argument and
  //   returns the maximum number in that array.
  //   Do not use Math.max
  //   Example: const arr = [1, 2, 3, 4, 5];
  if (arr.length === 0) {
    return 0;
  }
  let maxi = arr[0];
  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] > maxi) {
      maxi = arr[i];
    }
  }
  return maxi;
}

export function findLongestWord(str) {
  //   Write a function that takes a string as an argument and
  //   returns the longest word in that string.
  //   Hint: You can use String.prototype.split
  //   Example: const str = 'I love JavaScript';
  if (str.length === 0) {
    return "";
  }
  const words = str.split(" ");
  let longest = "";
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}

export function findSumOfEvenNums(arr) {
  //   Write a function that takes an array of numbers as an argument and
  //   returns an array of only the even numbers.
  //   Example: const arr = [1, 2, 3, 4, 5];
  //   Expected output: [2, 4]
  let res = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] % 2 === 0) {
      res.push(arr[i]);
    }
  }
  return res;
}

// reference types:
// sort reference arr
export function bubbleSortArr1(num) {
  // Write a function that takes an array of numbers as an argument and
  // returns a new sorted array using the bubble sort algorithm.
  // Do not use Array.prototype.sort
  // Example: const num = [5, 3, 8, 2, 1];
  // Expected output: [1, 2, 3, 5, 8]
  const arr = [...num];
  let len = arr.length;
  for (let i = 0; i < len; i += 1) {
    for (let j = 0; j < len - i - 1; j += 1) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
//sorted original array
export function bubbleSortArr2(num) {
  // Same as above but this time returns the original array reference sorted.
  let len = num.length;
  for (let i = 0; i < len; i += 1) {
    for (let j = 0; j < len - i - 1; j += 1) {
      if (num[j] > num[j + 1]) {
        [num[j], num[j + 1]] = [num[j + 1], num[j]];
      }
    }
  }
  return num;
}

export function removeTypes(arr, typeToRemove) {
  // Write a function that takes an array of mixed types and a type as arguments
  // and returns a new array without the specified type.
  // Example: const arr = [1, '2', 3, '4', 5];
  // removeTypes(arr, 'string');
  // Expected output: [1, 3, 5]
  let res = [];
  for (let i of arr) {
    if (typeof i !== typeToRemove) {
      res.push(i);
    }
  }
  return res;
}

// reinvent the wheel: prototype methods
export function changeNumsByAmount(nums, amount, operator) {
  // Write a function that takes an array of numbers, an amount and an operator as arguments
  // and returns a new array with the numbers changed by the amount and operator.
  // Example: const nums = [1, 2, 3, 4, 5];
  // changeNumsByAmount(nums, 2, '+');
  // Expected output: [3, 4, 5, 6, 7]
  let res = [];
  for (let num of nums) {
    let sum = 0;
    if (operator === "+") {
      sum = num + amount;
    } else if (operator === "-") {
      sum = num - amount;
    } else if (operator === "*") {
      sum = num * amount;
    } else if (operator === "/") {
      sum = num / amount;
    }
    res.push(sum);
  }
  return res;
}

export function removeNumFromArr(nums, num) {
  // Write a function that takes an array of numbers and a number as arguments
  // and returns a new array without the specified number.
  // Example: const nums = [1, 2, 3, 3, 3, 4, 5];
  // removeNumFromArr(nums, 3);
  // Expected output: [1, 2, 4, 5]
  let res = [];
  for (let i of nums) {
    if (i !== num) {
      res.push(i);
    }
  }
  return res;
}
