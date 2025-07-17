const fs = require("fs");
const path = require("path");

//File path
const readingfile = path.join(__dirname, "BigData.txt");
const writingfile = path.join(__dirname, "output.txt");
console.log("readingfile ", readingfile);
//CREATE READ STREAM
const readingStream = fs.createReadStream(readingfile, "utf8");
const writingStream = fs.createWriteStream(writingfile);
let bigData = "";
readingStream.on("data", (data) => {
  bigData += data;
  writingStream.write(bigData);
});

readingStream.on("end", () => {
  console.log(bigData);
  console.log("Streaming ends");
});
/*
const readStream = fs.createReadStream();

const filepath = path.join(__dirname, "newData.txt");
const writeStream = fs.WriteStream(filepath);
console.log(filepath);
*/
