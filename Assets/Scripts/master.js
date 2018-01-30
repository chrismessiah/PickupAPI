window.Prism = require('prismjs');
window.CodeFlask = require('codeflask');
window.$ = require('jquery');

var handleRequestClick = require('./handle-request-click.js');
var handleRequestChange = require('./handle-request-change.js');
var handleRouteChange = require('./handle-route-change.js');

window.prepareEditor = require('./prepare-flask.js');

window.requestInvalid = false;
window.requestMetod = "POST";
window.currentRoute = "api/pickups";
window.editorCodeObject = {};
window.requestParams = {};

window.flaskPOSTstandard = {
  body: "Roses are red, Violets are blue, sugar is sweet, And so are you.",
};

window.flaskPUTstandard = {
  id: 10030,
  body: "Roses are red, Violets are blue, sugar is sweet, And so are you.",
};

window.currentParam = "";

$(document).ready(function() {
  handleRequestClick();
  handleRequestChange();
  handleRouteChange();
})
