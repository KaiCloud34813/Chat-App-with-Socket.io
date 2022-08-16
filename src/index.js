require("dotenv").config();
const path = require("path");
const http = require("http"); // we wanna use socket.io and express so we have to do that, or anyway it will be done by express by default ...
const express = require("express");
const socketio = require("socket.io");

const publicDirectoryPath = path.join(__dirname, "../public");

const app = express();
const server = http.createServer(app);
const io = socketio(server); //calls a server created with the native http module in node. Now our server supports sockets...

app.use(express.static(publicDirectoryPath));

io.on("connection", () => {
  console.log("new WebSocket connection");
});

const ser = server.listen(process.env.PORT, function (req, res) {
  console.log("Listening to port: " + ser.address().port);
});
