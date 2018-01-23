var scrollTo = require('./scroll-to.js');

module.exports = function(route) {
  $.get(route, null, function(data, status){
    if (status === 'success') {
      responseText.innerHTML = (data) ? JSON.stringify(data, undefined, 2) : 'request OK';
      responseContainer.classList.remove("hidden");
      scrollTo('#response-container');
    } else {
      responseContainer.classList.add("hidden");
    }
  });
};
