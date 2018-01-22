var scrollTo = require('./scroll-to.js');

module.exports = function() {
  try {
    var sendObj = getFlaskFields(['id']);
  } catch (e) {
    alert(e)
    return;
  }

  $.ajax(window.currentRoute, {
    type: 'DELETE',
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
