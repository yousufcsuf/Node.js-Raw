//dependencies
const http = require("http");

const { buffer } = require("stream/consumers");
const { handleReqRes } = require("./helper/handleReqRes");
//app object - module scaffolding - would contain everything in the application
const app = {};

//configuration
app.config = {
  port: 5000,
};

//create server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(app.config.port, () => {
    console.log("listening to the port: " + app.config.port);
  });
};

//handle Request Response
app.handleReqRes = handleReqRes;
//start the server
app.createServer();
