var updateRoute = require('./update-route.js');

module.exports = function() {
  var parent = $('#request-button-mother');

  var editorContainer = $('#editor-container');
  var getRequestButton = $('#get-request-button');

  var routeSelect = document.getElementById("route-select");
  var routeSelectOptions = $('#route-select').children();

  var showAllRoutes = function() {
    routeSelectOptions.each(function(i) {
      $(this).removeClass('hidden');
    })
    setFirstAvailableRouteActive();
  }

  var setFirstAvailableRouteActive = function() {
    var stop = false;
    routeSelectOptions.each(function(i) {
      if ( !($(this).hasClass('hidden')) ) {
        if (!stop) {
          routeSelect.selectedIndex = i;
          stop = true;
        }
      }
    })
  }

  var hideRoutes = function(routesArray) {
    showAllRoutes();
    routeSelectOptions.each(function(i) {
      for (var i = 0; i < routesArray.length; i++) {
        var route = routesArray[i];
        if ($(this).html() == route) {
          $(this).addClass('hidden');
        }
      }
    })
    setFirstAvailableRouteActive();
  }

  var allButtons = [
    parent.find("#GET"),
    parent.find("#POST"),
    parent.find("#PUT"),
    parent.find("#DELETE"),
  ];

  var setNewActiveButton = function(newActive) {
    allButtons.forEach(function(button) {
      if (button.html() === window.requestMetod) {
        $(button).addClass('active');
      } else {
        $(button).removeClass('active');
      }
    })
  }

  var hideEditor = function() {
    editorContainer.addClass('hidden');
    getRequestButton.removeClass('hidden');
  }

  var showEditor = function() {
    editorContainer.removeClass('hidden');
    getRequestButton.addClass('hidden');
  }

  allButtons.forEach(function(button) {
    $(button).click(function() {
      window.requestMetod = this.innerHTML;
      setNewActiveButton(this.innerHTML);
      window.responseContainer.classList.add("hidden");

      switch (window.requestMetod) {
        case "GET":
          hideEditor();
          showAllRoutes();
          break;
        case "POST":
          showEditor();
          hideRoutes(['api/Pickups/:id'])
          window.updateFlask(window.flaskPOSTstandard);
          break;
        case "PUT":
          showEditor();
          hideRoutes(['api/Pickups/'])
          window.updateFlask(window.flaskPUTstandard);
          break;
        case "DELETE":
          hideEditor();
          hideRoutes(['api/Pickups/'])
          break;
      }
      updateRoute();
    })
  })
}
