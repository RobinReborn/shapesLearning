import React from 'react';
import ReactDOM from 'react-dom';

class Circle extends React.Component {
	constructor(props) {
	    super(props);
	}
	render() {
		return (
			<svg width="35em" height="35em" id="svgholder">
				<circle id="blueCircle" r="350" fill="blue" cx="350" cy="350" onClick={this.toggle}></circle>
			</svg>
		)
	}
};
export default Circle;