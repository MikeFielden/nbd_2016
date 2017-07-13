'use strict';

const five = require("johnny-five")
  , board = new five.Board()
  ;

// Sensor demo
board.on("ready", () => {
  let motorRight = new five.Servo({
    type: "continuous",
    pin: "11"
  })
    , motorLeft = new five.Servo({
    type: "continuous",
    pin: "9",
    invert: true
  });
  
  board.repl.inject({
    charge: () => {
      motorLeft.cw(1);
      motorRight.cw(1);
    },
    creep: () => {
      motorRight.cw(.05)
      motorLeft.cw(.05)
    },
    back: () => {
      motorRight.ccw(.05)
      motorLeft.ccw(.15)
    },
    stop: () => {
      motorRight.cw(0)
      motorLeft.ccw(0)
    },
    right: () => {
      motorRight.ccw(.5)
      motorLeft.cw(0)
    },
    nope: (timesToDoIt) => {
      let count = 0
        , timesCount = timesToDoIt || 4
        , interval = setInterval(() => {
            count++;
  
            if (count > timesCount) {
              clearInterval(interval);
              motorRight.ccw(0)
              motorLeft.cw(0)
              return;
            }
        
            if (count % 2 === 1) {
              motorRight.cw(.4)
              motorLeft.ccw(.4)
            } else if (count % 2 === 0) {
              motorRight.ccw(.4)
              motorLeft.cw(.4)
            }
      }, 100)
    },
    nomnom: (timesToDoIt) => {
      let count = 0
        , timesCount = timesToDoIt || 4
        , interval = setInterval(() => {
        
        count++;
      
        if (count > timesCount) {
          clearInterval(interval);
          motorRight.cw(0)
          motorLeft.cw(0)
          return;
        }
      
        if (count % 2 === 1) {
          motorRight.ccw(.4)
          motorLeft.ccw(.4)
        } else if (count % 2 === 0) {
          motorRight.cw(.4)
          motorLeft.cw(.4)
        }
      }, 100)
    },
    dance: (timesToDoIt) => {
      let count = 0
        , timesCount = timesToDoIt || 4
        , interval = setInterval(() => {
    
        count++;
    
        if (count > timesCount) {
          clearInterval(interval);
          motorRight.cw(0)
          motorLeft.cw(0)
          return;
        }
    
        if (count % 2 === 1) {
          motorRight.ccw(.4)
          motorLeft.ccw(0)
        } else if (count % 2 === 0) {
          motorRight.cw(.4)
          motorLeft.ccw(.1)
        }
      }, 1000)
    }
  })
  
  motorRight.cw(0)
  motorLeft.ccw(0)
});

