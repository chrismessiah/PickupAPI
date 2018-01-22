var scrollTo = require('./scroll-to.js');

module.exports = function() {
  $.get(window.currentRoute, null, function(data, status){
    if (status === 'success') {
      console.log(JSON.stringify(data, undefined, 2));
      responseText.innerHTML = (data) ? JSON.stringify(data, undefined, 2) : 'request OK';
      responseContainer.classList.remove("hidden");
      scrollTo('#response-container');
    } else {
      responseContainer.classList.add("hidden");
    }
  });
};
