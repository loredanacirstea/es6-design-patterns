'use strict';

var facade

$( document ).ready(function() {
  require(['Model/design_patterns/Facade.js']);
  facade = new Facade();
  console.log(facade)
});