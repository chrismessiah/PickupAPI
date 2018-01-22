module.exports = function() {
  var parent = $('#request-button-mother');

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
    })
  })
}
