(function() {
	"use strict";

    var ConvertButton = require('./convert_button.js');

    var InputBox = React.createClass({
      getInitialState: function getInitialState() {
        return {
          value: this.props.initialValue
        };
      },
      render: function() {
        return (
          <div className="input-form-container">
            <label>{this.props.name}</label>
            <input className="input-box" value={this.props.initialValue}></input>
            <br></br>
            < ConvertButton />
          </div>
        );
      }
    });

    module.exports = InputBox;

}());