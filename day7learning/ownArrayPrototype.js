//myForEach
Array.prototype.myForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};
[10, 20, 30].myForEach((num, index, arr) => {
  //console.log(num, index, arr);
  console.log(num); //output:10,20,30
});

//myMap
Array.prototype.myMap = function (cb) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(cb(this[i]));
  }
  return res;
};
[10, 20, 30].myMap((num) => {
  console.log(num * 2);
}); //output:20,40,60

// let arr = [10, 20, 30].myMap((num) => {
//   return num * 2;
// });
// console.log(arr); //output: [20,40,60]

//myFilter
Array.prototype.myFilter = function (cb) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      res.push(this[i]);
    }
  }
  return res;
};
[2, 4, 6, 7].myFilter((num) => {
  console.log(num % 2 === 0);
}); //output: true, true, true, false

// let even = [2, 4, 6, 7].myFilter((num) => {
//   return num % 2 === 0;
// });
// console.log(even); //output [2,4,6]
