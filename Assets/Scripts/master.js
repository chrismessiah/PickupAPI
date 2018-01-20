window.Prism = require('prismjs');
window.CodeFlask = require('codeflask');
window.$ = require('jquery');

window.prepareEditor = function() {
  var editor = document.getElementById('editor');

  var editorCodeObject = {Title: "Ulysses", Body: "Yet all experience is an arch wherethro'; Gleams that untravell'd world, whose margin fades For ever and for ever when I move"};
  editor.innerHTML = JSON.stringify(editorCodeObject, undefined, 2);

  var flask = new CodeFlask;
  flask.run('#editor', { language: 'javascript' });

  flask.onUpdate(function(code) {
    currentCode = code;
    console.log(currentCode);
  });
};

$(document).ready(function() {

})
