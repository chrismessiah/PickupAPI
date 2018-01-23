module.exports = function() {
  var parent = $('#request-button-mother');

  var editorContainer = $('#editor-container');
  var getRequestButton = $('#get-request-button');

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
          break;
        case "POST":
          showEditor();
          window.updateFlask(window.flaskPOSTstandard);
          break;
        case "PUT":
          showEditor();
          window.updateFlask(window.flaskPUTstandard);
          break;
        case "DELETE":
          hideEditor();
          break;
      }
    })
  })
}
