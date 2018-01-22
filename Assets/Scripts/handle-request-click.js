var handlePOST = require('./handle-post.js');
var handlePUT = require('./handle-put.js');
var handleGET = require('./handle-get.js');
var handleDELETE = require('./handle-delete.js');

module.exports = function() {
  window.responseContainer = document.getElementById('response-container');
  window.responseText = document.getElementById('response-text');

  $('#send-button').click(function() {
    switch (window.requestMetod) {
      case 'POST':
        handlePOST();
        break;
      case 'PUT':
        handlePUT();
        break;
      case 'DELETE':
        handleDELETE();
        break;
      default:
        console.log(`ERROR UNKNOWN REQUEST METHOD: ${window.requestMetod}`);
    }
  });

  $('#get-request-button').click(function() {
    handleGET();
  })
}
