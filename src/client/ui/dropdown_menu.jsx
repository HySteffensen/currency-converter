(function() {
  "use strict";

  		var DropdownMenu = React.createClass({
  			render: function() {
  				return (
  					<div className="select-container">
              <label>{this.props.name}</label>
              <select className="select" id={this.props.idValue}>
                <option>USA</option>
                <option>EU</option>
                <option>AUS</option>
              </select>
              <br></br>
              <br></br>
            </div>
  				);
  			}
  		});

      module.exports = DropdownMenu;

}());