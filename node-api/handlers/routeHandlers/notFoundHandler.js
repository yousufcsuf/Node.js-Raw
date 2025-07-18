const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
  callback(404, {
    message: "Your requested URL is not found",
  });
  console.log("notFoundHandler");
};

module.exports = handler;
