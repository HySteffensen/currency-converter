(function() {
	"use strict";

		var CurrencyConversionPicture = require('./currency_conversion_picture.js');
    var DropdownMenu = require('./dropdown_menu.js');

	  var CurrencyConversionTable = React.createClass({
      render: function() {
        return (
          <div id="table">
						<CurrencyConversionPicture />
						<DropdownMenu />
          </div>
        );
      }
    });

		module.exports = CurrencyConversionTable;

}());

// http://apps.eky.hk/css-triangle-generator/
// http://www.cssarrowplease.com/