(function() {
  "use strict";


  var ConvertButton = React.createClass({
    simulateChange: function simulateChange(message) {
      this.handleClick({ target: { message: message }});
    },
    handleClick: function(event) {
//      dump(event.target.value);
    },
    render: function() {
      return(
        <div>
          <button type="button" className="input-button" onClick={this.handleChange} disabled={this.props.disabled}> C O N V E R T </button>
        </div>
      );
    }
  });

  module.exports = ConvertButton;


}());