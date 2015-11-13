var React = require("react");
var ReactDOM = require("react-dom");

var CharacterControls = require("./components/character_controls.jsx");
var CharacterScene = require("./components/character_scene.jsx");

var App = React.createClass({

	getInitialState: function () {
		return {
			head: this.props.heads[0],
			body: this.props.bodies[0],
			tail: this.props.tails[0],
		};
	},

	getDefaultProps: function () {
			return {
					heads: [
						"stag",
						"tiger",
						"wolf"
					],
					bodies: [
						"canine",
						"cervine",
						"feline"
					],
					tails: [
						"cat",
						"bushy"
					]
			};
	},

	render: function() {

			var fruits = this.state.fruits;
			var filter = this.state.filter;

			return (
					<main className="site-content">
						<CharacterControls />
						<CharacterScene />
					</main>
			);
	}

})

ReactDOM.render(<App />, document.getElementById("application"));