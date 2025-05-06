// /* 1. check if a string is palindrome  */
// const isPalindrome = (str) => str === [...str].reverse().join('');
// /* test */
// const str1 = 'hellolleh';
// console.log('isPalindrome: ', isPalindrome(str1));

// /* 2. find the most frequently occurring number  */
// const findHighestFreq = (arr) => {
//   let max = -Infinity;
//   const map = {};
//   arr.forEach((num) => {
//     map[num] ? map[num]++ : (map[num] = 1);
//     max = Math.max(max, map[num]);
//   });
//   return max;
// };
// /* test */
// const arr1 = [...'314111'];
// console.log('findHighestFreq: ', findHighestFreq(arr1));

// /*
//   3. get the absolute difference between two digonal |(1+5+9)-(3+5+9)| = 2
// */
// const getDiffBetweenDigonal = (matrix) => {
//   let counter = 0;
//   const len = matrix.length;
//   for (let i = 0; i < len; i++) {
//     if (i < len - 1 - i) {
//       counter += matrix[i][i] - matrix[i][len - 1 - i];
//     } else break;
//   }
//   return Math.abs(counter);
// };
// /* test */
// const matrix = [
//   [10, 2, 3],
//   [4, 5, 6],
//   [9, 8, 9],
// ];
// console.log('getDiffBetweenDigonal: ', getDiffBetweenDigonal(matrix));

// /* 4. Count the number of 3s as digit in all numbers from 0 to 50. */
// const find3 = (start, end) => {
//   let counter = 0;
//   for (let i = start; i < end + 1; i++) {
//     [...i.toString()].forEach((num) => {
//       if (num === '3') counter++;
//     });
//   }
//   return counter;
// };
// /* test */
// console.log('find3: ', find3(0, 50));

// /* 5. revers a num */
// const reversNum = (num) => +[...num.toString()].reverse().join('');

// /* 6. give a string “cvs health”, change it to “Cvs Health” */
// const capitalFirstLetter = (str) =>
//   str
//     .split(' ')
//     .map((word) => {
//       return word[0].toUpperCase() + word.slice(1);
//     })
//     .join(' ');
// /* test */
// const str2 = 'cvs health';
// console.log('capitalFirstLetter: ', capitalFirstLetter(str2));

// /*
//   7. give a str: wave
//   Output: ["Wave", "wAve", "waVe", "wavE"]
// */
// const capEachCharInStr = (str) =>
//   [...str].map((char, i) => {
//     return str.substring(0, i) + char.toUpperCase() + str.substring(i + 1);
//   });

// /* test */
// const str3 = 'wave';
// console.log('capEachCharInStr: ', capEachCharInStr(str3));

// /*
//   8. give a string, only have (){}[], create a function check if the string is valid
// */
// const isValid = (str) => {
//   if (str.length % 2 !== 0) return false;
//   const paremap = { '{': '}', '[': ']', '(': ')' };

//   const strarr = [...str];
//   const stack = [];
//   for (let ele of strarr) {
//     if (paremap[ele]) {
//       stack.push();
//     } else if (stack.pop() !== paremap[ele]) {
//       return false;
//     }
//   }
//   return stack.length === 0;
// };
// /* test */
// console.log(isValid('()[{}{}]'));

// /*
//   9. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// */
// const twoSum = function(nums, target) {
//   const map = {};
//   const res = [];
//   for (let i in nums) {
//       const rest = target - nums[i];
//       if (map[rest] && map[rest] !== i) {
//           res.push(map[rest], i);
//           break;
//       }
//       map[nums[i]] = i;
//   }
//   return res;
// };

/* Fibonacci */
// const fibonacci = num => {
//   if (num === 0) return 0;
//   if (num === 1) return 1;

//   const arr = [0, 1];
//   for (let i = 2; i <= num; i++) {
//     const m = arr[i - 1] + arr[i - 2];
//     arr.push(m);
//   }
//   return arr[num];
// }
// const fibonacci = (num) => {
//   if (num === 1) return 1;
//   if (num === 0) return 0;
//   return fibonacci(num - 1) + fibonacci(num - 2);
// }
/* test */
// console.log(fibonacci(4));

/* old interview questions */
/* limited function */
// const fn = limitedFunction(3, (a, b, c) => console.log(a + b + c));

// function limitedFunction(excuteTime, cb) {
//     let counter = 0;
//     function excuteCb(...arg) {
//         if (counter === excuteTime) {
//             console.log('over limited');
//         } else {
//             counter += 1;
//             cb(...arg);
//         }
//     }
//     return excuteCb;
// }
/* test */
// fn(2, 3, 4);
// fn(2, 3, 6);
// fn(2, 3, 6);
// fn(2, 3, 2);

// /* looking for most close 3 numbers to the target */
// const givenArr = [45, 45, 32, 55, 16, 25, 74, 22, 13, 27, 41];
// function findCloseNums(givenNum, givenArr, find) {
//   givenArr.sort((a, b) => Math.abs(a - givenNum) - Math.abs(b - givenNum));
//   return givenArr.slice(0, find);
// }
// console.log(findCloseNums(40, givenArr, 1));

/* create a function safelyTraverse to involve two argument, an object and an array, the object is an nested object, the array list the keys */

// function safelyTraverse(obj, arr) {
//   if (!arr[0]) {
//     return obj;
//   }
//   if (!obj[arr[0]]) {
//     return undefined;
//   }
//   const key = arr.shift();
//   return safelyTraverse(obj[key], arr);
// }

// const obj = {
//   first: { second: { third: 6 } },
// };
// const arr = ['first', 'second', 'third'];
// console.log(safelyTraverse(obj, ['first', 'second', 'third']));

/* given the out string length, and how many char you have to use, create a function to generate the string */
// /*
//   @param [number, number] N, K
//   @return [string]
// */
// function solution(N, K) {
//   const countArr = [...'abcefghijklmnopqrstuvwxyz'];
//   const chars = countArr.slice(0, K);
//   let str = N % 2 === 0 ? chars[0] + chars[0] : chars[0];
//   for (let i = 1; i < N / 2; i++) {
//     if (chars[i]) {
//       str = chars[i] + str + chars[i];
//       continue;
//     }
//     str = chars[0] + str + chars[0];
//   }
//   return str;
// }
// console.log(solution(8, 3));

/* given an array of ints, return a number not contains by the array and bigger then 0 */
// function solution(arr) {
//   const set = new Set(arr);
//   let res = 0;
//   for (let i = 0; i < set.size; i++) {
//     if (set.has(res++))
//       continue;
//     break;
//   }
//   return res;
// }
// console.log(solution([1, 3, 6, 4, 1, 2]))

// for in vs. for of
// splice vs. slice
// const arr = [1, 0, -7, -3, 11, 8]; // -7, -3, 0, 1, 8, 11
// arr.sort((a, b) => a - b);
// arr.sort((a, b) => {
//   if (a < b) {
//     return 1;
//   } else if (a > b) {
//     return -1;
//   } else {
//     return 0;
//   }
// }); // -1, 0, 1

// const sqs = 'qwertyuiopasdfghjklzxcvbnm';
// console.log(sqs.indexOf('a'));

// const arr = [...'erabe'];
// arr.sort((a, b) => a.localeCompare(b))
// arr.sort((a, b) => {
//   if (sqs.indexOf(a) < sqs.indexOf(b)) {
//     return -1;
//   } else if (sqs.indexOf(a) > sqs.indexOf(b)) {
//     return 1;
//   } else {
//     return 0;
//   }
// }); //abeer
// console.log(arr);

// const arr = ['tea', 'eat', 'ate', 'rrew','eerw', 'werr', 'hi'];
// function solution(arr) {
//   const map = {};
//   arr.forEach(ele => {
//     const str = [...ele].sort((a, b) => a.localeCompare(b)).join('');
//     if (map[str]) {
//       map[str] = [...map[str], ele];
//     } else {
//       map[str] = [ele];
//     }
//   });
//   return Object.values(map);
// }
// console.log(solution(arr));

// /* call */
// Function.prototype.myCall = function (obj) {
// 	//& bind the target obj;
// 	const targetObj = obj || window;
// 	targetObj.fn = this;

// 	//& get the arguments for the function;
// 	const context = [...arguments].slice(1);

// 	//& return the resault;
// 	return targetObj.fn(context);
// };

// /* apply */
// Function.prototype.myApply = function (obj, fnargs) {
// 	//& bind the target obj;
// 	const targetObj = obj || window;
// 	targetObj.fn = this;

// 	//& get the arguments for the function and return the res;
// 	if (fnargs) {
// 		return targetObj.fn(fnargs);
// 	} else {
// 		return targetObj.fn();
// 	}
// };

// /* bind */
// Function.prototype.myBind = function (obj) {
// 	//& bind the target obj;
// 	const targetObj = obj || window;
// 	targetObj.fn = this;

// 	//& return the resault;
// 	return function () {
//     return targetObj.fn.myApply(targetObj, ...arguments)
//   }
// };

// /* instanceOf ?? */
// function myInstanceOf(left, right) {
//   let leftValue = left.__proto__
//   let rightValue = right.prototype
//   while (true) {
//     if (leftValue === null) {
//       return false
//     }
//     if (leftValue === rightValue) {
//       return true
//     }
//     leftValue = leftValue.__proto__
//   }
// }

// /* new */
// function myNew(fn) {
//   const obj = {
//     __proto__: fn.prototype
//   };
//   return function() {
//     //& using call method to *add* these args into the obj;
//     fn.call(obj, ...arguments);

//     //& finally generate the new obj;
//     return obj;
//   }
// }

// function Person(name, age) {
//   this.name = name
//   this.age = age
// }
// const obj = myNew(Person)('David', 50);
// console.log(obj);

// /* Object.create ?? */
// function myCreate(obj) {
//   function F() {}

//   F.prototype = obj;

//   return new F;
// }

// /* deep copy: only obj or arr */
// function deepCopy(obj) {
// 	const copiedObj = obj instanceof Array ? [] : {};
// 	for (const key in obj) {
// 		const type = typeof obj[key];
// 		copiedObj[key] =
// 			type !== "object" ? obj[key] : deepCopy(obj[key]);
// 	}
// 	return copiedObj;
// }
// const obj = {
// 	arr: [
// 		{
// 			name: "David",
// 			age: 51,
// 			arrinside: ["str1", "str2", true],
// 		},
// 		56,
// 	],
// };
// // const obj = [23, {arr: [44, {arrin: [22]}]}];
// const newobj = deepCopy(obj);
// console.log(newobj);

// /* custom EventEmitter */
// class EventEmitter {
// 	events = {};

// 	addListener(type, fn) {
// 		if (!this.events[type]) {
// 			this.events[type] = fn;
// 		}
// 	}
// 	emit(type) {
// 		const handler = this.events[type];
// 		handler.apply(this, [...arguments].slice(1));
// 	}
// }
// const emitter = new EventEmitter();
// emitter.addListener('console', age => console.log(age));
// emitter.emit('console', 55);

// /* router */
// class Router {
// 	routes = {};
// 	currentHash = "";

// 	constructor() {
//     this.freshRoute = this.freshRoute.bind(this);
// 		window.addEventListener("load", this.freshRoute, false);
// 		window.addEventListener("hashchange", this.freshRoute, false);
// 	}

// 	addRoute(path, fn) {
// 		this.routes[path] = fn || function () {};
// 	}
// 	freshRoute() {
// 		this.currentHash = location.hash.slice(1) || "/";
// 		this.routes[this.currentHash]();
// 	}
// }

// /* throttle */
// function myThrottle(fn, delay) {
// 	let prev = Date.now();
// 	return function () {
// 		const now = Date.now();
// 		if (now - prev >= delay) {
// 			fn.apply(this, arguments);
// 			prev = Date.now();
// 		}
// 	};
// }

// /* debounce */
// function myDebounce(fn, delay) {
// 	let timer = null;
// 	return function () {
// 		clearTimeout(timer);
// 		timer = setTimeout(function () {
// 			fn.apply(this, arguments);
// 		}, delay);
// 	};
// }

// /* interview questions */
// const square = v => v * v;
// const double = v => v * 2;
// const addOne = v => v + 1;

// const pipe = (...args) => {
//   return num =>
//     args.reduce((acc, fn) => fn(acc), num);
//   // return num => {
//   //   let res = num;
//   //   while (args.length) {
//   //     const fn = args.shift();
//   //     res = fn(res);
//   //   }
//   //   console.log(res);
//   // }
// }
// const res = pipe(square, double, addOne);
// console.log(res(3));

// function mask(str) {
// 	const res = [...str]
// 		.map((ele, i) => (i < str.length - 4 ? "#" : ele))
// 		.join("");

// 	console.log(res);
// }
// mask("1234567890");

// leetcode 200

// // debounceTime
// function debounceTime(cbfn, delay) {
//   let debouncetimer = undefined;
//   return function(...args) {
//     clearTimeout(debouncetimer);
//     debouncetimer = setTimeout(() => {
//       cbfn.call(this, ...args); // <------ this?
//     }, delay);
//   }
// }
// const fn = debounceTime((a) => console.log(a + 6), 3000);

/* a fn return target arr

  exp: [w, w, a, c, a]
  1st ---> w is unic till now,                          output w;
  2nd ---> w is not unic now,  and no unic in the pool, output -1;
  3rd ---> a is unic till now,                          output a;
  4th ---> c is unic,          but the first unic is a, output a;
  5th ---> a is not unic now,  the first unic is c now, output c; 

  exp: [a, b, c, b, a, d]
  1st ---> a is unic till now,                          output a;
  2nd ---> b is unic now,      but the first unic is a, output a;
  3rd ---> c is unic till now, but the first unic is a, output a;
  4th ---> b is not unic,      the first unic is a,     output a;
  5th ---> a is not unic now,  the first unic is c now, output c; 
  6th ---> d is unic,          but the first unic is c, output c;
*/
// const arr = [...'wwaca'];
// const arr2 = [...'abcbad'];

// function genNarr(arr, count) {
//   const newarr = [];
//   const map = {};

//   for (let i = 0; i < count; i++) {
//     map[arr[i]] = map[arr[i]] + 1 || 1;
//     const key = Object.entries(map).find((ele) => ele[1] === 1);

//     if (!key) {
//       newarr.push(-1);
//     } else {
//       newarr.push(key[0]);
//     }
//   }
//   return newarr;
// }

// console.log(genNarr(arr, 5));
// console.log(genNarr(arr2, 6));

/* const str = 'abc ab c bc ab';
function solution(str) {
  const [map, resmap] = [{}, {}];
  
  for (let i = 0; i < str.length; i++) {
    map[str[i]] = map[str[i]] + 1 || 1;
    if (map[str[i]] > 1) {
      resmap[str[i]] = map[str[i]];
    }
  }

  const resarr = [];
  for (let key in resmap) {
    key === ' ' 
      ? resarr.push(`Space ${resmap[key]}`)
      : resarr.push(`${key} ${resmap[key]}`)
  }

  return resarr.join(', ');
}
console.log(solution(str)); */

const purchase1 = 720;

function countPoint(purchase) {
  const point2 = (purchase - 100) * 2;
  if (purchase < 50) {
    return 0;
  } else if (purchase < 100 && purchase >= 50) {
    return purchase - 50;
  } else {
    return point2 + 50;
  }
}

console.log(countPoint(purchase1));
