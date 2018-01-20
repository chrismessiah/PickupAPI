var Prism = require('prismjs');
var CodeFlask = require('codeflask');
window.$ = require('jquery');

$(document).ready(function() {
  var currentCode = document.getElementById('editor').innerHTML;

  var flask = new CodeFlask;
  flask.run('#editor', { language: 'javascript' });

  flask.onUpdate(function(code) {
    currentCode = code;
    console.log(currentCode);
  });
})
