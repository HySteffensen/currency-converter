(function() {

"use strict";

var ConfigurationPanel = require("./configuration_panel.js");
var StockMarketTable = require("./stock_market_table.js");
var React = require("./react-15.3.1.js");

var ApplicationUi = React.createClass({ displayName: 'ApplicationUi',
  render: function() {
    return React.DOM.div(null,
      ConfigurationPanel(null),
      React.DOM.hr(null),
      StockMarketTable(null)
    );
  }
});

module.exports = ApplicationUi;

}());
