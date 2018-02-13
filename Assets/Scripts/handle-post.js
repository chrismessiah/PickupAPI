var scrollTo = require('./scroll-to.js');

module.exports = function(route, errorCallback) {
  try {
    var sendObj = getFlaskFields(['body']);
  } catch (e) {
    alert(e)
    return;
  }

  $.ajax(route, {
    type: 'POST',
    data: sendObj,
    success: function(data) {
      responseText.innerHTML = `request OK`;
      responseContainer.classList.add('small');
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
