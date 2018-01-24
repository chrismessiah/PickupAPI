var updateRoute = require('./update-route.js');

module.exports = function() {
  $('#route-select').on('change',function(){
    updateRoute();
  });

  $('#param-val').keyup(function(){
    updateParam();
  });

  var updateParam = function() {
    window.requestParams[window.currentParam] = $('#param-val').val();
  }
}
