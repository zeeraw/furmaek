var React = require("react");

module.exports = React.createClass({

  getDefaultProps: function () {
      return {
          head: "stag",
          body: "feline",
          tail: "cat",
      };
  },

  render: function() {
    return (
      <div className="character-scene">
        <div className="character-preview">
          <img className="character-head" src={ "/assets/head/" + this.props.head + ".png" }/>
          <img className="character-body" src={ "/assets/body/" + this.props.body + ".png" } />
          <img className="character-tail" src={ "/assets/tail/" + this.props.tail + ".png" } />
        </div>
      </div>
    )
  }

})