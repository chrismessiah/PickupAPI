module.exports = function(el) {
  $('html, body').animate({
      scrollTop: $(el).offset().top-150,
  }, 500);
}
