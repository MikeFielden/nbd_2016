'use strict';

const five = require("johnny-five")
  , board = new five.Board()
  , setUpButtonPressDemo = () => {
        let led = new five.Led(11)
          , button = new five.Button(2)
          ;
  
        button.on('press', () => {
          led.on();
        })
  
        button.on('hold', () => {
          led.blink(500);
        })
  
        button.on('release', () => {
          led.stop().off();
        });
      }
  ;

// Button demo
board.on("ready", setUpButtonPressDemo);