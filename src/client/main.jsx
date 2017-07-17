(function() {
  "use strict";



  var ReactDOM = require("./react-dom-15.3.1.js");

  var CurrencyConverterTable = React.createClass({
    render: function() {
      return (
        <div id="table">

        </div>
      );
    }
  });

  var ApplicationUi = React.createClass({
    render: function() {
      return(
        <div>
          <CurrencyConverterTable />
        </div>
      )
    }
  });

  ReactDOM.render(
    <ApplicationUi />,
    document.getElementById('app')
  );

}());
