window.Prism = require('prismjs');
window.CodeFlask = require('codeflask');
window.$ = require('jquery');

var handleRequestClick = require('./handle-request-click.js');
var handleRequestChange = require('./handle-request-change.js');
var handleRouteChange = require('./handle-route-change.js');

window.prepareEditor = require('./prepare-flask.js');

window.requestInvalid = false;
window.requestMetod = "POST";
window.currentRoute = "api/Pickups";
window.editorCodeObject = {};
window.requestParams = {};

window.flaskPOSTstandard = {
  title: "Ulysses",
  body: "Yet all experience is an arch wherethro'; Gleams that untravell'd world, whose margin fades For ever and for ever when I move",
};

window.flaskPUTstandard = {
  id: 10,
  title: "Ulysses",
  body: "Yet all experience is an arch wherethro'; Gleams that untravell'd world, whose margin fades For ever and for ever when I move",
};

window.currentParam = "";

$(document).ready(function() {
  handleRequestClick();
  handleRequestChange();
  handleRouteChange();
})
