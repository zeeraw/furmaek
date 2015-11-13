var React = require("react");

module.exports = React.createClass({

  getDefaultProps: function () {
    return {
      changeHandler: function (state) { alert("WAT!") },
      heads: [],
      bodies: [],
      tails: [],
    }
  },

  generateLinks: function(type, list, handler) {
    return list.map(function(item){
      key = type + "-" + item
      onClick = function(e) {
        state = {}
        state[type] = item
        handler(state);
      }
      return <a href="#" key={key} onClick={onClick}>{item}</a>
    });
  },

  render: function() {
    var handler = this.props.changeHandler
    var heads = this.generateLinks("head", this.props.heads, handler)
    var bodies = this.generateLinks("body", this.props.bodies, handler)
    var tails = this.generateLinks("tail", this.props.tails, handler)

    return (
      <div className="character-controls">
        <nav className="head">
          <span>Head: </span>{heads}
        </nav>
        <nav className="body">
          <span>Body: </span>{bodies}
        </nav>
        <nav className="tail">
          <span>Tail: </span>{tails}
        </nav>
      </div>
    );
  }

});
