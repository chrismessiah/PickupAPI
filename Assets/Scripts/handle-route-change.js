module.exports = function() {
  $('#route-select').on('change',function(){
    updateRoute();
  });

  var updateRoute = function() {
    var optionEl = document.getElementById("route-select");
    var route = optionEl.options[optionEl.selectedIndex].value;
    route = route.substring(0, route.length - 1);
    window.currentRoute = route;
  }
}
