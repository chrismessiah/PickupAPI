module.exports = function() {
  var paramEl = $('#param');
  var paramCont = $('#param-container');

  $('#route-select').on('change',function(){
    updateRoute();
  });

  $('#param-val').keyup(function(){
    updateParam();
  });

  var currentParam;

  var updateRoute = function() {
    var optionEl = document.getElementById("route-select");
    var route = optionEl.options[optionEl.selectedIndex].value;
    if (route.indexOf(':') >= 0) {
      currentParam = route.split(':')[1];
      paramEl.html(currentParam + ':');
      paramEl.val(1);
      window.requestParams = {};
      window.requestParams[currentParam] = 1;
      paramCont.removeClass('hidden');
    } else {
      paramCont.addClass('hidden');
      window.requestParams = {};
    }
    window.currentRoute = route;
  }

  var updateParam = function() {
    window.requestParams[currentParam] = $('#param-val').val();
  }
}
