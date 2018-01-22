module.exports = function() {
  var parent = $('#request-button-mother');

  var editorContainer = $('#editor-container');
  var getRequestButton = $('#get-request-button');

  var allButtons = [
    parent.find("#GET"),
    parent.find("#POST"),
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

  allButtons.forEach(function(button) {
    $(button).click(function() {
      window.requestMetod = this.innerHTML;
      setNewActiveButton(this.innerHTML);
      window.responseContainer.classList.add("hidden");
      if (window.requestMetod === "GET") {
        editorContainer.addClass('hidden');
        getRequestButton.removeClass('hidden');
      } else {
        editorContainer.removeClass('hidden');
        getRequestButton.addClass('hidden');
      }
    })
  })
}
