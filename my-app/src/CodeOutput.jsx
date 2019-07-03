import React from 'react';

class CodeOutput extends React.Component {
	render() {
		return (
			<svg width="35em" height="35em" id="svgholder">
				<circle r={this.props.r} fill={this.props.fill} cx={this.props.cx} cy={this.props.cy}/>
				<circle r= {this.props.guessR} fill={this.props.guessFill} cx={this.props.guesscx} cy={this.props.guesscy}/>
			</svg>
			)
		}
	}

export default CodeOutput;