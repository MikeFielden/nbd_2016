'use strict';

const Barcli = require("barcli")
  , five = require("johnny-five")
  , board = new five.Board()
  ;

board.on("ready", () => {
  let range = [0, 1024]
    , graph = new Barcli({
        label: "Potentiometer",
        range: range,
      })
    , rotary = new five.Sensor("A0")
    ;
  
  rotary.scale.apply(rotary, range).on("change", () => {
    graph.update(rotary.value);
  });
})

//// Sensor demo
//board.on("ready", () => {
//  let rotary = new five.Sensor("A0")
//    , led = new five.Led(11)
//    ;
//
//  rotary.on("change", () => {
//    console.log(`Shifted value  :  ${rotary.value >> 2}`);
//    console.log(`Unshifted value:  ${rotary.value}`);
//    led.brightness(rotary.value >> 2);
//  });
//})