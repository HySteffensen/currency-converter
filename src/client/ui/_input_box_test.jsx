(function() {
  "use strict";

  var TestUtils = React.addons.TestUtils;
  var InputBox = require("./input_box.js");

  describe("InputBox", function() {
    var field;
    var eventTriggered;

    beforeEach(function() {
      field = TestUtils.renderIntoDocument(<InputBox
        name="AMOUNT"
        value={ "123" }
        onChange={changeHandler}
      />);

      function changeHandler(newValue) {
        eventTriggered = newValue;
      }
    });

    it("displays label", function() {
      expect(TestUtils.findRenderedDOMComponentWithTag(field, "label").innerText).to.equal("AMOUNT");
      //dump(field);
    });
  });

}());