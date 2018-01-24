module.exports = function() {
  var paramEl = $('#param');
  var paramCont = $('#param-container');
  var optionEl = document.getElementById("route-select");
  
  var route = optionEl.options[optionEl.selectedIndex].value;
  if (route.indexOf(':') >= 0) {
    window.currentParam = route.split(':')[1];
    paramEl.html(window.currentParam + ':');
    paramEl.val(1);
    window.requestParams = {};
    window.requestParams[window.currentParam] = 1;
    paramCont.removeClass('hidden');
  } else {
    paramCont.addClass('hidden');
    window.requestParams = {};
  }
  window.currentRoute = route;
}
