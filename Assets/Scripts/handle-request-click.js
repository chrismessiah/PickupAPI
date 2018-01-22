var handlePOST = require('./handle-post.js');

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
}
