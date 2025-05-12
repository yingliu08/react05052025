// Global scope

var globalVar = "I am global";

function accessGlobal() {
  return globalVar;
}

//console.log(accessGlobal()); // Expected output?  "I am global"
//console.log(globalVar); // Expected output?  "I am global"

// Local scope
function localScope() {
  var localVar = "I am local to this function";
}

//localScope();
//console.log(localVar); // What happens here and why?, reference error, because local var is declared inside the function

// Block scope
if (true) {
  let blockVar = "I exist inside this block only";
  const blockConst = "So do I!";
}

// console.log(blockVar); // What is the result and why?reference error, because let and const are block variable
// console.log(blockConst); // What is the result and why?

// Function scope vs block scope
function loopScope() {
  for (var i = 0; i < 3; i++) {
    // console.log(i); // Outputs during loop? 0,1,2
  }
  // console.log("After loop with var: " + i); // What happens here?3

  for (let j = 0; j < 3; j++) {
    // console.log(j); // Outputs during loop?
  }
  // console.log("After loop with let: " + j); // What happens here? reference error
}

loopScope();
