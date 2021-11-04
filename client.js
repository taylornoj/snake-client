const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
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
    setTimeout(() => {
      conn.write("Say: move out the way");
    }, 200)
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