//writes an example of a closure that generates a random number between 0 and 100
// with initiated and logs the password is "##" when invoked

//Modify the closure above to memoize an objective of name <-> passcode pairs
// and log a passcode for a given name from cache.
// For instance, every time 'logPasscode('peter')' is run,
// the function should log "The passcode is ##" with the specific passcode generated for 'Peter';

function generateNum() {
  const obj = {}; //{alex:{pwd,expiredTime}}
  return function logpassword(name) {
    if (!obj[name]) {
      obj[name] = {
        pwd: Math.floor(Math.random() * 100),
        experiedTime: Date.now() + 1000,
      };
    }
    if (Date.now() > obj[name].experiedTime) {
      obj[name] = {
        pwd: Math.floor(Math.random() * 100),
        experiedTime: Date.now() + 1000,
      };
      console.log(
        `old password for ${name} is expired. new password is ${obj[name].pwd}`
      );
    } else {
      console.log(`password for ${name} is ${obj[name].pwd}`);
    }
  };
}
const res = generateNum();
res("peter");
res("john");

setTimeout(() => {
  res("peter"); // output: "old password for peter is expired. new password is ##"
}, 1500);
