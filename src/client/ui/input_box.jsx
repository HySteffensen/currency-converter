(function() {
	"use strict";

    var ConvertButton = require('./convert_button.js');

    var InputBox = React.createClass({
      render: function() {
        return (
          <div className="input-form-container">
            <label>{this.props.name}</label>
            <input className="input-box"></input>
            <br></br>
            < ConvertButton />
          </div>
        );
      }
    });

    module.exports = InputBox;

}());