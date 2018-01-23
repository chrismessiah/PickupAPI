var scrollTo = require('./scroll-to.js');

module.exports = function(route) {
  $.ajax(route, {
    type: 'DELETE',
    success: function(data) {
      responseText.innerHTML = data || `request OK`;
      responseContainer.classList.remove("hidden");
      scrollTo('#response-container');
    },
    error: function() {
      responseContainer.classList.add("hidden");
    }
  });
};
