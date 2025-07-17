const fs = require("fs");

//PATH
const path = require("path");
const filePath = path.join(__dirname, "bigdata.txt");

//THIS IS HOW WE INITIATE OUR READ STREAM
console.log(filePath);
const ourReadStream = fs.createReadStream(filePath, "utf8");

ourReadStream.on("data", (data) => {
  console.log(data);
});
