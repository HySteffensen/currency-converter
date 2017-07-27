(function() {
  "use strict";

  var TestUtils = React.addons.TestUtils;
  var InputBox = require("./input_box.js");

  describe("InputBox", function() {
    var field;

    beforeEach(function() {
      field = TestUtils.renderIntoDocument(<InputBox
        name="AMOUNT"
        initialValue={ "123" }
      />);
    });

    it("displays label", function() {
      expect(label().innerText).to.equal("AMOUNT");
    });

    it("displays initial value", function() {
      expect(input().value).to.equal("123");
    });

    function input() {
      return TestUtils.findRenderedDOMComponentWithTag(field, "input");
    }

    function label() {
      return TestUtils.findRenderedDOMComponentWithTag(field, "label");
    }
  });

}());