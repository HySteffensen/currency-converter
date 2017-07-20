(function() {

"use strict";

	var CurrencyConversionTable = require('./currency_conversion_table.js');

  var ApplicationUi = React.createClass({
    render: function() {
      return(
        <div>
          <CurrencyConversionTable />
        </div>
      );
    }
  });

  module.exports = ApplicationUi;

}());
