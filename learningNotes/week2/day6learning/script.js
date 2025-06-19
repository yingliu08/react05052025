// //constructor
// function Book(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;

//   this.getSummary = function () {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
//   };
// }
// const bookone = new Book("Book one", "John", "2022");
// const booktwo = new Book("Book two", "Jane", "2010");
// console.log(booktwo.getSummary()); // book two was written by jan in 2010

// //prototype
// function Book1(title, author, year) {
//   this.title = title;
//   this.author = author;
//   this.year = year;
// }
// //getSummary to be prototype, not in object
// Book1.prototype.getSummary = function () {
//   return `${this.title} was written by ${this.author} in ${this.year}`;
// };

// Book1.prototype.getAge = function () {
//   const years = new Date().getFullYear() - this.year;
//   return `${this.title} is ${years} years old`;
// };
// //revise change year
// Book1.prototype.revise = function (newYear) {
//   this.year = newYear;
//   this.revised = true;
// };
// const book11 = new Book("Book one", "John", "2022");
// const book12 = new Book("Book two", "Jane", "2010");

// console.log(book12.getSummary());
// console.log(book12.getAge());
// book12.revise(2015);
// console.log(book12);

// //inheritence

// function magazine(title, author, year, month) {
//   Book1.call(this, title, author, year);
//   this.month = month;
// }
// //inherit prototype
// magazine.prototype = Object.create(Book1.prototype);
// const mag1 = new magazine("mag one", "john", "2018", "jan");
// console.log(mag1.getSummary());

// magazine.prototype.constructor = magazine; //change the construtor
// console.log(mag1);

// //obejct of prototype
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
class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
  getAge() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  }
  revise(newYear) {
    this.year = newYear;
    this.revised = true;
  }
  static topBookSotre() {
    return "barnes";
  }
}
const book1 = new Book("book one", "john", "2022");
// console.log(book1);
// book1.revise("2018");
// console.log(book1);
//console.log(book1.topBookSotre()); //wont work, static need to call by class
console.log(Book.topBookSotre()); //print barnes

//magazine subclass in es6 like inheritance in es5
class magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }
}
const mag2 = new magazine("book2", "jone", "2023", "jan");
console.log(mag2);
console.log(mag2.getSummary());
const getsummarycopy = mag2.getSummary();
console.log(getsummarycopy);
