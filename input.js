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

module.exports = {setupInput};