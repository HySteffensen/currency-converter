(function() {
  "use strict";

  var ReactDOMServer = require("./../react-dom-server-15.3.1.js");
  var ConvertButton = require("./convert_button.js");
  var TestUtils = React.addons.TestUtils;

  describe("Convert Button", function() {

    it("convert button is disabled by default", function() {
      var field = TestUtils.renderIntoDocument(<ConvertButton />);
      expect((TestUtils.findRenderedDOMComponentWithTag(field, "button").disabled)).to.be(true);
    });

    it.skip("handles change", function() {

      TestUtils.Simulate.click(< ConvertButton />);
    });
  });

})();