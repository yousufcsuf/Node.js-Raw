const http = require("http");
// incomming data which is send by request is received in stream
//createserver , helps to create a server and its a kind of emitter
//http and incoming request arrives stream
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    //just a form
    res.write("<html><head><title></title></head>");
    res.write(
      "<body><form method='post' action='/process'><input name='message'></input></form></body>"
    );
    res.write("<html><head><title></title></head>");

    res.end();
    //res.end("hello, the server is ready");
  } else if (req.url === "/process" && req.method === "POST") {
    //so the req data is coming on stream
    //receiving data in chunks
    inputInformation = [];
    req.on("data", (chuck) => {
      inputInformation.push(chuck);
    });

    //WHEN THE STREAMING IS COMPLETELY FULLY , IT HAS AN END EVENT
    req.on("end", () => {
      console.log("stream finished");
      const parsedBody = Buffer.concat(inputInformation).toString();
      console.log(parsedBody);
    });
    res.write("This is about us page");
    res.end();
  } else {
    res.end("not found");
  }
});

server.listen(3000);

console.log("listening");
