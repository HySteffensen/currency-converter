(function() {
	"use strict";

		var CurrencyConversionPicture = require('./currency_conversion_picture.js');
    var DropdownMenu = require('./dropdown_menu.js');
    var InputBox = require('./input_box.js');

	  var CurrencyConversionTable = React.createClass({
      render: function() {
        return (
          <div id="table">
						<CurrencyConversionPicture />
						<div id="dropdown-container">
						  <div id="dropdown-right">
						    <p> TO </p>
						    <DropdownMenu idValue="2" />
						  </div>

						  <div id="dropdown-left">
						    <p> FROM </p>
						    <DropdownMenu idValue="1" />
						  </div>
						</div>
						<div>
							<InputBox />
						</div>
          </div>
        );
      }
    });

		module.exports = CurrencyConversionTable;

}());

// http://apps.eky.hk/css-triangle-generator/
// http://www.cssarrowplease.com/