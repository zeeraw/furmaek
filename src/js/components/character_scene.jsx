var React = require("react");

module.exports = React.createClass({

  render: function() {
    return (
      <div className="character-scene">
        <div className="character-preview">
          <img className="character-head" src="/assets/head/stag.png" />
          <img className="character-body" src="/assets/body/cervine.png" />
          <img className="character-tail" src="/assets/tail/cat.png" />
        </div>
      </div>
    )
  }

})