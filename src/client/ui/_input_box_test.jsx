(function() {
  "use strict";

  var TestUtils = React.addons.TestUtils;
  var InputBox = require("./input_box.js");

  describe("InputBox", function() {
    var field;

    beforeEach(function() {
      field = TestUtils.renderIntoDocument(<InputBox
        name="AMOUNT"
      />);
    });

    it("displays label", function() {
      expect(label().innerText).to.equal("AMOUNT");
    });

    it("displays initial value", function() {
      expect(input().value).to.equal("");
    });

    it("handles change", function() {
      TestUtils.Simulate.change(input(), { target: {value: "foo"} });
      expect(input().value).to.equal("foo");
    });

    describe("Convert Button", function() {

      it("is disabled by default", function() {
        expect(button()).to.be(true);
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
    });

    function input() {
      return TestUtils.findRenderedDOMComponentWithTag(field, "input");
    }

    function label() {
      return TestUtils.findRenderedDOMComponentWithTag(field, "label");
    }

    function button() {
      return TestUtils.findRenderedDOMComponentWithTag(field, "button").disabled;
    }
  });

}());