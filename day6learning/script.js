// 1. OOP
// constructor & constructor function
// Prototype methods
// static
// 2. Prototypes
// prototype chain / inheritance
// this keyword
// 3. Function Prototypes
// Call, apply, bind
// 4. Object prototypes and methods
// Entries, keys, values

//console.log(window);
// window.alert();
// alert(1); // would work too because window is global object, js automatically convert it into window.alert
// console.log(navigator.appVersion);

// //constructor
// function Book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;

//   this.getSummary = function () {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
//   };
// }

// const book1 = new Book("Book one", "John", "2022");
// const book2 = new Book("Book two", "Jane", "2010");

// console.log(book2);

//prototype
// function Book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
// }
// //getSummary to be prototype, not in object
// Book.prototype.getSummary = function () {
//   return `${this.title} was written by ${this.author} in ${this.year}`;
// };

// Book.prototype.getAge = function () {
//   const years = new Date().getFullYear() - this.year;
//   return `${this.title} is ${years} years old`;
// };
// //revise change year
// Book.prototype.revise = function (newYear) {
//   this.year = newYear;
//   this.revised = true;
// };
// const book1 = new Book("Book one", "John", "2022");
// const book2 = new Book("Book two", "Jane", "2010");

// console.log(book2.getSummary());
// console.log(book2.getAge());
// console.log(book2);
// book2.revise(2015);
// console.log(book2);

//inheritence

// function Book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
// }
// //getSummary
// Book.prototype.getSummary = function () {
//   return `${this.title} was written by ${this.author} in ${this.year}`;
// };

// function magazine(title, author, year, month) {
//   Book.call(this, title, author, year);
//   this.month = month;
// }
// //inherit prototype
// magazine.prototype = Object.create(Book.prototype);
// const mag1 = new magazine("mag one", "john", "2018", "jan");
// console.log(mag1.getSummary());

// magazine.prototype.constructor = magazine; //change the construtor
// console.log(mag1);

//obeject create
//obejct of prototype
// const bookproto = {
//   getSummary: function () {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
//   },
//   getAge: function () {
//     const years = new Date().getFullYear() - this.year;
//     return `${this.title} is ${years} years old`;
//   },
// };
// //create object
// const book1 = Object.create(bookproto);
// book1.title = "book1";
// book1.author = "jone";
// book1.year = "2022";

// const book2 = Object.create(bookproto, {
//   title: { value: "book2" },
//   author: { value: "jane" },
//   year: { value: "2012" },
// });
// console.log(book1);
// console.log(book2);

//es6 class
// class Book {
//   constructor(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//   }
//   getSummary() {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
//   }
//   getAge() {
//     const years = new Date().getFullYear() - this.year;
//     return `${this.title} is ${years} years old`;
//   }
//   revise(newYear) {
//     this.year = newYear;
//     this.revised = true;
//   }
//   static topBookSotre() {
//     return "barnes";
//   }
// }
// const book1 = new Book("book one", "john", "2022");
// // console.log(book1);
// // book1.revise("2018");
// // console.log(book1);
// //console.log(book1.topBookSotre()); //wont work, static need to call class
// console.log(Book.topBookSotre()); //print barnes

//subclass

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}

//magazine subclass in es6 like inheritance in es5
class magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }
}
const mag1 = new magazine("book2", "jone", "2023", "jan");
console.log(mag1);
console.log(mag1.getSummary());
