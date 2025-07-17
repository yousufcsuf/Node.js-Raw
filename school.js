//EVENT MODULE
const EventEmitter = require("events");

//THIS IS THE CLASS THAT HELPS
const emitter = new EventEmitter();

class school extends EventEmitter {
  startPeriod() {
    console.log("Class started ");

    //raise an event
    setTimeout(() => {
      this.emit("bellRing");
    }, 1000);
  }
}
module.exports = startPeriod;
