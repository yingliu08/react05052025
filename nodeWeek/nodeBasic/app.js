//path module
const path = require("path");
var pathObj = path.parse(__filename);
console.log(pathObj);

//os module
const os = require("os");
var totalMemory = os.totalmem();
var freeMemory = os.freemem();
console.log("total memo: " + totalMemory);
console.log("free memo: " + freeMemory);

//fs module
const fs = require("fs");
fs.readdir("./", function (err, files) {
  if (err) console.log("error: ", error);
  else console.log("result: ", files);
});

//event, eventEmitter is class
const eventEmitter = require("events");
const emitter = new eventEmitter(); //emitter is object
//register a listener
emitter.on("messageLogged", function (eventArg) {
  console.log("listener called", eventArg);
});
emitter.emit("messageLogged", { id: 1, url: "http://" });

//http module
const http = require("http");
const server = http.createServer(function (req, res) {
  if (req.url === "/") {
    res.write("hello");
    res.end();
  }
  if (req.url === "/api/courses") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});
// server.on("connection", (socket) => {
//   console.log("new connection...");
// });
server.listen(3000);

console.log("listening on port 3000");
