var handlePOST = require('./handle-post.js');
var handleGET = require('./handle-get.js');

module.exports = function() {
  window.responseContainer = document.getElementById('response-container');
  window.responseText = document.getElementById('response-text');

  $('#send-button').click(function() {
    switch (window.requestMetod) {
      case 'POST':
        handlePOST();
        break;
      default:
        console.log(`ERROR UNKNOWN REQUEST METHOD: ${window.requestMetod}`);
    }
  });

  $('#get-request-button').click(function() {
    handleGET();
  })
}
