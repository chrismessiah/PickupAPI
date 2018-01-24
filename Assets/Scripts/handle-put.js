var scrollTo = require('./scroll-to.js');

module.exports = function(route, errorCallback) {
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
    error: function(jqXHR, textStatus, errorThrown) {
      responseContainer.classList.add("hidden");
      var message = `Error ${jqXHR.status}: ${errorThrown}`
      errorCallback(message);
    }
  });
};
