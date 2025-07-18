//dependencies
const http = require("http");

const { buffer } = require("stream/consumers");
const { handleReqRes } = require("./helper/handleReqRes");
const environment = require("./helper/environments");
const data = require("./lib/data");
//app object - module scaffolding - would contain everything in the application
const app = {};

//testing file system
data.create(
  "test",
  "newFile",
  { name: "Bangladesh", language: "Bangla" },
  (err) => {
    console.log("error was " + err);
  }
);

//configuration
app.config = {
  port: 5000,
};

//create server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(environment.port, () => {
    console.log("listening to the port: " + environment.port);
  });
};

//handle Request Response
app.handleReqRes = handleReqRes;
//start the server
app.createServer();
