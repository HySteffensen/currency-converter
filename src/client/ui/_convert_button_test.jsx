(function() {
  "use strict";

  var ReactDOMServer = require("./../react-dom-server-15.3.1.js");
//  var ConvertButton = require("./convert_button.js");
  var InputBox = require("./input_box.js");
  var TestUtils = React.addons.TestUtils;

  describe("Convert Button", function() {

    it("is disabled by default", function() {
      var inputBox = TestUtils.renderIntoDocument(<InputBox />);
      expect((TestUtils.findRenderedDOMComponentWithTag(inputBox, "button").disabled)).to.be(true);
    });

    it("is enabled when user enters text", function() {
      var inputBox = TestUtils.renderIntoDocument(<InputBox />);
      var input = TestUtils.findRenderedDOMComponentWithTag(inputBox, "input");
      TestUtils.Simulate.change(input, { target: {value: "foo"} });
      expect((TestUtils.findRenderedDOMComponentWithTag(inputBox, "button").disabled)).to.be(false);
    });
  });

})();