(function() {
	"use strict";

    var InputBox = React.createClass({
      render: function() {
        return (
          <div className="input-form">
            <p className ="input-title"> AMOUNT </p>
            <input className="input-box"></input>
            <br></br>
            <button className="input-button"> C O N V E R T </button>
          </div>
        );
      }
    });

    module.exports = InputBox;

}());