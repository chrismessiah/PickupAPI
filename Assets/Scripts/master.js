window.Prism = require('prismjs');
window.CodeFlask = require('codeflask');
window.$ = require('jquery');

window.requestInvalid = false;
window.editorCodeObject = {};

window.prepareEditor = function() {
  var editor = document.getElementById('editor');
  var codeInvalidEl = document.getElementById('code-invalid');
  var sendButtonEl = document.getElementById('send-button');

  window.editorCodeObject.title = "Ulysses";
  window.editorCodeObject.body = "Yet all experience is an arch wherethro'; Gleams that untravell'd world, whose margin fades For ever and for ever when I move";

  var editorString = JSON.stringify(window.editorCodeObject, undefined, 2);

  var flask = new window.CodeFlask;
  flask.run('#editor', { language: 'json' });
  flask.update(editorString);

  flask.onUpdate(function(code) {
    try {
      JSON.parse(code, undefined, 2)
      window.editorCodeObject = JSON.parse(code, undefined, 2);
      editorString = code;
      codeInvalidEl.classList.remove("show");
      sendButtonEl.classList.remove("inactive");
      window.requestInvalid = false;
    } catch (e) {
      console.log(e);
      codeInvalidEl.classList.add("show");
      sendButtonEl.classList.add("inactive");
      window.requestInvalid = true;
    }
  });
};

window.scrollTo = function(el) {
  $('html, body').animate({
      scrollTop: $(el).offset().top-150,
  }, 500);
};

$(document).ready(function() {
  var responseContainer = document.getElementById('response-container');
  var responseText = document.getElementById('response-text');

  $('#send-button').click(function() {
    var fieldWhitelist = ['title', 'body'], sendObj = {};
    fieldWhitelist.forEach(function(field) { sendObj[field] = window.editorCodeObject[field]; });

    $.post('api/ipsums',sendObj, function(data, status){
      if (status === 'success') {
        responseText.innerHTML = data || `request OK`;
        responseContainer.classList.remove("hidden");
        scrollTo('#response-container');
      } else {
        responseContainer.classList.add("hidden");
      }
    });

  });
})
