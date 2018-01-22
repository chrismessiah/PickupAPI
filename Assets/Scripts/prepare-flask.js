module.exports = function() {
  var editor = document.getElementById('editor');
  var codeInvalidEl = document.getElementById('code-invalid');
  var sendButtonEl = document.getElementById('send-button');

  window.editorCodeObject.title = "Ulysses";
  window.editorCodeObject.body = "Yet all experience is an arch wherethro'; Gleams that untravell'd world, whose margin fades For ever and for ever when I move";

  var editorString = JSON.stringify(window.editorCodeObject, undefined, 2);

  window.flask = new window.CodeFlask;
  window.flask.run('#editor', { language: 'json' });
  window.flask.update(editorString);

  window.flask.onUpdate(function(code) {
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
