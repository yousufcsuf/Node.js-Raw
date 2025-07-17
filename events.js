//events in js
//node.js is a event driven runtime
// class - eventEmitter

//EVENT MODULE
const EventEmitter = require("events");

//THIS IS THE CLASS THAT HELPS
const emitter = new EventEmitter();

//TO CREATE EVENTS WE USE EMIT() METHOD, OR RAISE THE ISSUE
//emitter.emit("bellRing");

//require the school
const school = require("./school");

//REGISTER A LISTERNER FOR BELLRING EVENT

const school = new school();

school.on("bellRing", () => {
  console.log("we need to run");
});
school.startPeriod();
