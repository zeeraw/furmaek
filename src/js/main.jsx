var React = require("react");
var ReactDOM = require("react-dom");

var CharacterControls = require("./components/character_controls.jsx");
var CharacterScene = require("./components/character_scene.jsx");

var App = React.createClass({

	changeHandler: function (state) {
		this.setState(state)
	},

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

			var head = this.state.head;
			var body = this.state.body;
			var tail = this.state.tail;

			return (
					<main className="site-content">
						<CharacterControls 	heads={this.props.heads}
																bodies={this.props.bodies}
																tails={this.props.tails}
																changeHandler={this.changeHandler}
						/>

						<CharacterScene head={head} body={body} tail={tail} />
					</main>
			);
	}

})

ReactDOM.render(<App />, document.getElementById("application"));