var scrollTo = require('./scroll-to.js');

module.exports = function() {
  var fieldWhitelist = ['title', 'body'], sendObj = {};

  var logTemp;
  try {
    fieldWhitelist.forEach(function(field) {
      if (!window.editorCodeObject[field]) {
        throw `Field "${field}" missing in request!`;
      }
      sendObj[field] = window.editorCodeObject[field];
    });
  } catch (e) {
    alert(e)
    return;
  }

  $.post('api/ipsums',sendObj, function(data, status){
    if (status === 'success') {
      responseText.innerHTML = data || `request OK`;
      responseContainer.classList.remove("hidden");
      scrollTo('#response-container');
    } else {
      responseContainer.classList.add("hidden");
    }
  });
};
