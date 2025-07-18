//dependencies
const url = require("url"); // -->app.config.port
const { StringDecoder } = require("string_decoder");
const {
  notFoundHandler,
} = require("../handlers/routeHandlers/notFoundHandler");
const routes = require("../routes");
const handler = {};

handler.handleReqRes = (req, res) => {
  //routes & url
  //if true the it would get the whole URL
  const parsedUrl = url.parse(req.url, true);
  /**
   parsedURl Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '?name=yousuf&age=26',
  query: [Object: null prototype] { name: 'yousuf', age: '26' },
  pathname: '/usa/yousuf',
  path: '/usa/yousuf?name=yousuf&age=26',
  href: '/usa/yousuf?name=yousuf&age=26'
   */
  console.log("parsedURl", parsedUrl);
  const path = parsedUrl.path;
  const trimmedPath = path.replace(/^\/+|\/+$/g, "");
  console.log("path: -->", path);
  console.log("trimmedPath -->", trimmedPath);
  const pathname = parsedUrl.pathname;
  console.log("pathname -->" + pathname);
  //WHAT KIND OF METHOD IS HTTP REQUEST IS USING
  const method = req.method.toLowerCase();
  console.log("method -->" + method);
  //QUERY PARAMETERS --> contains all the informations in the url that we want to pass along with the url
  //only for get method
  const queryStringObject = parsedUrl.query;
  console.log("queryStringObject -->", queryStringObject);
  //request header --> contains all the information regarding the server & extra information
  const headerObject = req.headers;
  console.log("headerObject -->", headerObject);
  //        header structure
  //    headerObject --> {
  //    'content-type': 'application/json',
  //    'user-agent': 'PostmanRuntime/7.44.1',
  //    accept: '*/*',
  //    'cache-control': 'no-cache',
  //    'postman-token': '009f6976-8df7-448d-bc65-7dd0c08a8291',
  //    'host': '127.0.0.1:3000',
  //    'accept-encoding': 'gzip, deflate, br',
  //    'connection': 'keep-alive',
  //    'content-length': '43'
  //    }

  //Post sends data through body(also known as request Payload)
  //Post data is received as stream,
  // we are using string decoder
  //this is how we process post data
  const decoder = new StringDecoder("utf-8");
  let realData = "";
  //NOW IMPLEMENTING ROUTES

  const requestProperties = {
    parsedUrl,
    path,
    trimmedPath,
    method,
    queryStringObject,
    headerObject,
  };
  const chosenHandler = routes[trimmedPath]
    ? routes[trimmedPath]
    : notFoundHandler;

  chosenHandler(requestProperties, (statusCode, payload) => {
    statusCode = typeof statusCode === "number" ? statusCode : 500;
    payload = typeof payload === "object" ? payload : {};

    const payloadString = JSON.stringify(payload);

    //final response
    res.writeHead(statusCode);
    res.end(payloadString);
  });
  req.on("data", (buffer) => {
    realData += decoder.write(buffer);
  });

  req.on("end", () => {
    realData += decoder.end();
    //post data
    console.log("Post data: ", realData);
  });

  //res.end(JSON.stringify(parsedUrl));
};

module.exports = handler;
