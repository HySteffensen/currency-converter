(function() {
  "use strict";

  		var DropdownMenu = React.createClass({
  			render: function() {
  				return (
  					<div>
              <select className="select" id={this.props.idValue}>
                <option>USA</option>
                <option>EU</option>
                <option>AUS</option>
              </select>
            </div>
  				)
  			}
  		});

      module.exports = DropdownMenu;

}());