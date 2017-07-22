(function() {
  "use strict";

  var ReactDOMServer = require("./../react-dom-server-15.3.1.js");
  //var TestUtils = React.addons.TestUtils;
  var DropdownMenu = require('./dropdown_menu');

  describe("Dropdown Menu", function() {
    it("tests static HTML", function() {
      var rendered = ReactDOMServer.renderToStaticMarkup(<DropdownMenu idValue="1" />);
      expect(rendered).to.equal( '' +
      '<div>' +
        '<select class="select" id="1">' +
          '<option>USA</option>' +
          '<option>EU</option>' +
          '<option>AUS</option>' +
        '</select>' +
      '</div>'
      );
      //dump(rendered);
    });
  });


}());