'use strict';

const five = require("johnny-five")
  , board = new five.Board()
  ;

// Sensor demo
board.on("ready", () => {
  let temp = new five.Temperature({
    controller: "TMP36",
    pin: "A0"
  });
  
  temp.on("change", () => {
    console.log(temp.fahrenheit + "°F");
  });
});