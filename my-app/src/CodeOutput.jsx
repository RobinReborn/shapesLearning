import React from 'react';
import ReactDOM from 'react-dom';

class CodeOutput extends React.Component {
	constructor(props) {
	    super(props);
	}
	render() {
		return (
			<svg width="35em" height="35em" id="svgholder">
				<circle id="blueCircle" r={this.props.r} fill={this.props.fill} cx={this.props.cx} cy={this.props.cy}></circle>
			</svg>
			)
		}
	}

export default CodeOutput;