import swal from 'sweetalert';

var handlePOST = require('./handle-post.js');
var handlePUT = require('./handle-put.js');
var handleGET = require('./handle-get.js');
var handleDELETE = require('./handle-delete.js');

module.exports = function() {

  var getNewRoute = function() {
    var newRoute = window.currentRoute;
    if (newRoute.indexOf(':') >= 0) {
      for(var key in window.requestParams) {
        if (window.requestParams.hasOwnProperty(key)) {
          newRoute = newRoute.replace(':'+key, window.requestParams[key]);
        }
      }
    }
    if (newRoute.indexOf(':') >= 0) {
      console.log(newRoute);
      throw 'Error: param in route'
    }
    return newRoute;
  }

  window.responseContainer = document.getElementById('response-container');
  window.responseText = document.getElementById('response-text');

  var errorCallback = function(message) {
    if (message) {
      swal ("Oh no!", message, "error");
    } else {
      swal ("Oh no!", "Something went wrong!", "error")
    }
  };

  var sendRequest = function() {
    var route = getNewRoute();
    switch (window.requestMetod) {
      case 'GET':
        handleGET(route, errorCallback);
        break;
      case 'POST':
        handlePOST(route, errorCallback);
        break;
      case 'PUT':
        handlePUT(route, errorCallback);
        break;
      case 'DELETE':
        handleDELETE(route, errorCallback);
        break;
      default:
        console.log(`ERROR UNKNOWN REQUEST METHOD: ${window.requestMetod}`);
    }
  };

  $('#send-button').click(sendRequest);
  $('#get-request-button').click(sendRequest);
}
