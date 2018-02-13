var scrollTo = require('./scroll-to.js');

module.exports = function(route, errorCallback) {
  $.ajax(route, {
    type: 'GET',
    success: function(data) {
      if (data) {
        responseText.innerHTML = Prism.highlight(JSON.stringify(data, undefined, 2), Prism.languages.json);
      } else {
        responseText.innerHTML = 'request OK';
      }

      responseContainer.classList.remove("hidden");
      scrollTo('#response-container');
    },
    error: function(jqXHR, textStatus, errorThrown) {
      responseContainer.classList.add("hidden");
      var message = `Error ${jqXHR.status}: ${errorThrown}`
      errorCallback(message);
    }
  });
};
