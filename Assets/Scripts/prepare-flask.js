module.exports = function() {
  var editor = document.getElementById('editor');
  var codeInvalidEl = document.getElementById('code-invalid');
  var sendButtonEl = document.getElementById('send-button');

  window.updateFlask = function(json) {
    window.editorCodeObject = {};
    for (var key in json) {
        if (json.hasOwnProperty(key)) {
           window.editorCodeObject[key] = json[key];
        }
    }
    window.editorString = JSON.stringify(window.editorCodeObject, undefined, 2);
    window.flask.update(window.editorString);
  }

  window.getFlaskFields = function(fields) {
    var ret = {};
    fields.forEach(function(field) {
      if (!window.editorCodeObject[field]) {
        throw `Field "${field}" missing in request!`;
      }
      ret[field] = window.editorCodeObject[field];
    });
    return ret;
  }

  window.flask = new window.CodeFlask;
  window.flask.run('#editor', { language: 'json' });

  window.updateFlask(flaskPOSTstandard);

  window.flask.onUpdate(function(code) {
    try {
      JSON.parse(code, undefined, 2)
      window.editorCodeObject = JSON.parse(code, undefined, 2);
      window.editorString = code;
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
