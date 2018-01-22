window.Prism = require('prismjs');
window.CodeFlask = require('codeflask');
window.$ = require('jquery');

var handleRequestClick = require('./handle-request-click.js');
var handleRequestChange = require('./handle-request-change.js');
var handleRouteChange = require('./handle-route-change.js');

window.prepareEditor = require('./prepare-flask.js');

window.requestInvalid = false;
window.requestMetod = "POST";
window.currentRoute = "api/ipsums";
window.editorCodeObject = {};

$(document).ready(function() {
  handleRequestClick();
  handleRequestChange();
  handleRouteChange();
})
