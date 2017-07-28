(function() {
  "use strict";

  var ReactDOMServer = require("./../react-dom-server-15.3.1.js");
  var InputBox = require("./input_box.js");
  var TestUtils = React.addons.TestUtils;

  describe("Convert Button", function() {
    var inputBox;

    beforeEach(function() {
      inputBox = TestUtils.renderIntoDocument(<InputBox />);
    });

    it("is disabled by default", function() {
      expect((TestUtils.findRenderedDOMComponentWithTag(inputBox, "button").disabled)).to.be(true);
    });

    it("is enabled when user enters text", function() {
      TestUtils.Simulate.change(input(), { target: {value: "foo"} });
      expect(button()).to.be(false);
    });

    it("is disabled when user deletes all text", function() {
      TestUtils.Simulate.change(input(), { target: {value: ""} });
      expect(input().value).to.equal("");
      expect(button()).to.be(true);
    });

    function input() {
      return TestUtils.findRenderedDOMComponentWithTag(inputBox, "input");
    }

    function button() {
      return TestUtils.findRenderedDOMComponentWithTag(inputBox, "button").disabled;
    }
  });

})();