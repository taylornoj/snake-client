const net = require("net");


// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log(data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server!");
    setTimeout(() => {
      conn.write("Name: TVN");
    }, 100);
  });
  // conn.on("connect", () => {
  //   conn.write("Move: down");
  //   setTimeout(() => {
  //     conn.write("Move: left")
  //   }, 500);
  //   setInterval(() => {
  //     conn.write("Move: up")
  //   }, 50);
  //   conn.write("Move: left");
  // })
  return conn;
};

module.exports = {connect};