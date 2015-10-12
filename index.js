'use strict';
require(['Model/loretek/design_patterns/Facade.js']);

var facade;

class Test {
  test() {
    return "test";
  }
}

var test = new Test;
test.test(); // "test"

$( document ).ready(function() {
  console.log(Facade)
  facade = new Facade();
  console.log(facade)
});