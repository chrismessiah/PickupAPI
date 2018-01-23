var scrollTo = require('./scroll-to.js');

module.exports = function(route) {
  try {
    var sendObj = getFlaskFields(['title', 'body']);
  } catch (e) {
    alert(e)
    return;
  }

  $.post(route, sendObj, function(data, status){
    if (status === 'success') {
      responseText.innerHTML = data || `request OK`;
      responseContainer.classList.remove("hidden");
      scrollTo('#response-container');
    } else {
      responseContainer.classList.add("hidden");
    }
  });
};
