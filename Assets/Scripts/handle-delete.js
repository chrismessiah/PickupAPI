var scrollTo = require('./scroll-to.js');

module.exports = function(route, errorCallback) {
  $.ajax(route, {
    type: 'DELETE',
    success: function(data) {
      responseText.innerHTML = data || `request OK`;
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
