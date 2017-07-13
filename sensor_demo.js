'use strict';

const five = require("johnny-five")
  , board = new five.Board()
  ;

// Sensor demo
board.on("ready", () => {
  let rotary = new five.Sensor("A0")
    , led = new five.Led(11)
    ;
  
  led.on();
  
  rotary.on("change", () => {
    if (rotary.value === 0) {
      led.stop().off();
    } else {
      led.blink(rotary.value);
    }
  });
});