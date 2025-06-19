// //promise
// function fun1() {
//   return new Promise(function (resolve, reject) {
//     resolve("hi");
//   });
// }
// function fun2() {
//   return new Promise(function (resolve, reject) {
//     resolve("done with fun2");
//   });
// }
// function onsuccess(data) {
//   console.log(data);
// }
// fun1().then(fun2).then(onsuccess);

//promise
// const getBeef = () => {
//   return new Promise((resolve) => {
//     resolve("beef");
//   });
// };

//async/await
const getBeef = async () => {
  return "beef";
};
const cookBeef = async (beef) => {
  if (beef === "beef") {
    return "patty";
  }
};
const getBuns = async () => {
  return "buns";
};
const getBeefBetweenBuns = async (patty, buns) => {
  if (patty === "patty" && buns === "buns") {
    return "burger";
  }
};
const getBurger = async (burger) => {
  if (burger === "burger") {
    return "burger done";
  }
};

// const beef = getBeef();
// console.log(beef); //output: promise {"beef"}

// getBeef().then((beef) => {
//   console.log(beef); //output:beef
// });

const makeBurger = async () => {
  const beef = await getBeef();
  //  console.log(beef); //output:beef
  const patty = await cookBeef(beef);
  // console.log(patty); //output:patty
  const buns = await getBuns();
  const burger = await getBeefBetweenBuns(patty, buns);
  const finalBurger = await getBurger(burger);
  console.log(finalBurger);
};
makeBurger();

//use both .then and async/await to write, including error handling
//fetch API from jsonplaceholder
//async/awit
// const fetchPosts = async () => {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await res.json();
//     return data;
//   } catch (error) {
//      console.log("error:", error.message);
//   }
// };
// fetchPosts().then(console.log);

//.then
// const fetchPosts1 = () => {
//   return fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       return data;
//     })
//     .catch((error) => {
//       console.log("Handled error:", error.message);
//     });
// };
// fetchPosts1().then(console.log);

//use both .then and async/await to write, including error handling
//write a promise-based function that return a random number after a delay
const generateRandom = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let number = Math.random();
      if (number) {
        resolve(number);
      } else {
        reject("fail to generate number");
      }
    }, 2000);
  });
};
//.then
generateRandom()
  .then((number) => {
    console.log("number:", number);
  })
  .catch((error) => {
    console.log(error);
  });
//asyn/await
const res = async () => {
  try {
    const num = await generateRandom();
    return num;
  } catch (error) {
    console.log(error);
  }
};

//use both .then and async/await to write, including error handling
//use Promise.all to write an example
