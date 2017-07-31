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
						    <DropdownMenu name="TO" idValue="2" />
						  </div>

						  <div id="dropdown-left">
						    <DropdownMenu name="FROM" idValue="1" />
						  </div>
						</div>
						<div>
							<InputBox name="AMOUNT" initialValue="" />
						</div>
          </div>
        );
      }
    });

		module.exports = CurrencyConversionTable;

}());