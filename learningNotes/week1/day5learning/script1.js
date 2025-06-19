const obj = { key1: "a", key2: "b" };
//const {key1,key2} = obj
const keyname = "key2";
console.log(obj[keyname]);

const obk1 = obj.key1;

const person1 = { name: "john" };
const person2 = { name: "jane" };

const { name: name1 } = person1;
const { name: name2 } = person2;
