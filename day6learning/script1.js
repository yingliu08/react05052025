function showThis() {
  console.log(this);
}

showThis();
// window (in non-strict mode)
// undefined (in 'use strict' mode)

//constructor
function Person(name) {
  this.name = name;
}

const p = new Person("Alice");
console.log(p.name); // Alice

//obejct
const obj = {
  name: "Tom",
  sayName: function () {
    console.log(this.name);
  },
};

obj.sayName(); // Tom
