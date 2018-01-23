var scrollTo = require('./scroll-to.js');

module.exports = function(route) {
  try {
    var sendObj = getFlaskFields(['title', 'body']);
  } catch (e) {
    alert(e)
    return;
  }

  $.ajax(route, {
    type: 'PUT',
    data: sendObj,
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
