(function() {
  "use strict";

  var ReactDOMServer = require('./../react-dom-server-15.3.1.js');
  var CurrencyConversionTable = require('./currency_conversion_table');

  describe("Currency Conversion Table", function() {
    it("tests static HTML", function() {
      var rendered = ReactDOMServer.renderToStaticMarkup(<CurrencyConversionTable />);
      //dump(rendered);
    });
  });


}());