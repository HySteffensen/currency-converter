(function() {
  "use strict";

  var TestUtils = React.addons.TestUtils;
  var InputBox = require("./input_box.js");

  describe("InputBox", function() {
    var field;

    beforeEach(function() {
      field = TestUtils.renderIntoDocument(<InputBox
        name="AMOUNT"
        value={ "123" }
      />);
    });

    it("displays label", function() {
      expect(TestUtils.findRenderedDOMComponentWithTag(field, "label").innerText).to.equal("AMOUNT");
      //dump(field);
    });
  });

}());