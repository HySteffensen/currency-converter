(function() {
	"use strict";

		var CurrencyConversionPicture = require('./currency_conversion_picture.js');

	  var CurrencyConversionTable = React.createClass({
      render: function() {
        return (
          <div id="table">
						<CurrencyConversionPicture />

          </div>
        );
      }
    });

		module.exports = CurrencyConversionTable;

}());