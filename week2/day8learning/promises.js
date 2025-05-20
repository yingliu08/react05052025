//promise any: return any first resolve
//if all reject, will return[AggregateError: All promises were rejected]
const p1 = Promise.resolve("Error from p1");
const p2 = Promise.reject("Error from p2");
//const p3 = Promise.reject("Success from p3");
const p3 = Promise.resolve("Success from p3");
Promise.any([p1, p2, p3])
  .then((value) => {
    console.log("Promise.any resolved with:", value); // Success from p3
  })
  .catch((error) => {
    console.error("Promise.any rejected:", error);
  });

//promise all: return all resolve, if any reject, return reject immediate
const pp1 = Promise.resolve("Error from pp1");
const pp2 = Promise.resolve("Error from pp2");
//const pp2 = Promise.reject("Success from pp2");
const pp3 = Promise.resolve("Success from pp3");
Promise.all([pp1, pp2, pp3])
  .then((value) => {
    console.log("Promise.all resolve with:", value); // pp3
  })
  .catch((err) => {
    console.error("Promise.all rejected:", err);
  });

//promise allsettled: return all results
const ppp1 = Promise.resolve("Error from ppp1");
const ppp2 = Promise.reject("Error from ppp2");
const ppp3 = Promise.resolve("Success from ppp3");
Promise.allSettled([ppp1, ppp2, ppp3])
  .then((value) => {
    console.log("Promise.allSettled resolve with:", value);
  })
  .catch((err) => {
    console.error("Promise.allSettled rejected:", err);
  });

//promise race: first resolve or first reject
const pppp2 = Promise.reject("Error from pppp2");
const pppp1 = Promise.resolve("Error from pppp1");

//Promise.race([pppp1, pppp2])
Promise.race([pppp2, pppp1])
  .then((value) => {
    console.log("promise.race resolve with ", value);
  })
  .catch((err) => {
    console.error("promise.race reject with ", err);
  });
