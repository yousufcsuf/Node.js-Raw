//dependencies
const { sampleHandler } = require("./handlers/routeHandlers/sampleHandlers");
const { notFoundHandler } = require("./handlers/routeHandlers/notFoundHandler");
const routes = {
  sample: sampleHandler,
};

module.exports = routes;
