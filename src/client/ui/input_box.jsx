(function() {
	"use strict";

    var ConvertButton = require('./convert_button.js');

    var InputBox = React.createClass({
      getInitialState: function getInitialState() {
        return {
          value: this.props.initialValue,
          disabled: true
        };
      },
      handleChange: function handleChange(event) {
        var isDisabled;
        if (event.target.value.length > 0) {
          isDisabled = false;
        } else {
          isDisabled = true;
        }
        this.setState({
          value: event.target.value,
          disabled: isDisabled
        });
      },
      render: function() {
        return (
          <div className="input-form-container">
            <label>{this.props.name}</label>
            <input className="input-box" value={this.state.value} onChange={this.handleChange}></input>
            <br></br>
            < ConvertButton disabled={this.state.disabled} />
          </div>
        );
      }
    });

    module.exports = InputBox;

}());