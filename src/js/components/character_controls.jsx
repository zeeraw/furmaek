var React = require("react");

module.exports = React.createClass({

  render: function() {
    return (
      <div className="character-controls">
        <nav className="head">
          <span>Head: </span>
          <a href="#">stag</a>
          <a href="#">wolf</a>
          <a href="#">tiger</a>
        </nav>
        <nav className="body">
          <span>Body: </span>
          <a href="#">cervine</a>
          <a href="#">canine</a>
          <a href="#">feline</a>
        </nav>
        <nav className="tail">
          <span>Tail: </span>
          <a href="#">cat</a>
          <a href="#">bushy</a>
        </nav>
      </div>
    );
  }

});