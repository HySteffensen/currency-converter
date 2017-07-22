(function() {
  "use strict";

  var ReactDOMServer = require("./../react-dom-server-15.3.1.js");
  var ConvertButton = require("./convert_button.js");

  describe("Convert Button", function() {
    it("tests staticHTML", function() {
      var rendered = ReactDOMServer.renderToStaticMarkup(< ConvertButton />);
      expect(rendered).to.equal('<div><button class="input-button"> C O N V E R T </button></div>');
      //dump(rendered);
    });
  });

})();