//const net = require("net");
const {connect} = require('./client')

// setup interface to handle user input from stdin

const setupInput = function () {
  console.log("Snake");
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    console.log("Terminate game: ");
    process.exit()
  }
};

setupInput();
console.log("Connecting ...");
connect();