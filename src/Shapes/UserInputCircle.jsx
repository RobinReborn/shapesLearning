import React from 'react';
import {instructionIncrement, incrementShape} from '../actions'
import { connect } from "react-redux";

class UserInputCircle extends React.Component {
	constructor(props) {
    	super(props);
    	this.setFill = this.setFill.bind(this);
    	this.state = {fill: 'black', fillFont: 'white'}
    	this.click = this.click.bind(this);
	}
	setFill = color => {
		this.setState({fill: color.target.value, fillFont: 'black'})
	}
	click() {
		if (this.state.fill === 'blue') {
			const {dispatch} = this.props;
			dispatch(instructionIncrement())
        	dispatch(incrementShape())
    	}
    }
	render() {

		return (<div className='flipHolder' onClick={this.click}>
			<div className='card'>
				<svg viewBox="0 0 100 100">>
					<circle r="50" fill={this.state.fill} cx="50" cy="50" strokeWidth="2"/>
				</svg>
			</div>
	        <div className='card'>
		        <svg viewBox="0 0 100 100">
		  			<text x="32" y="25" fontSize="12" fill={this.state.fillFont}>&lt;circle</text>
		   			<text x="33" y="45" fontSize="12" fill={this.state.fillFont}>r="50"</text>
		  			<text x="26" y="65" fontSize="12" fill={this.state.fillFont}>fill="</text>
		  			<foreignObject x="51" y="47" width="30" height="30"><input type='text' onChange={this.setFill}/></foreignObject>
					<text x="80" y="65" fontSize="12" fill={this.state.fillFont}>"&gt;</text>
		  			<text x="29" y="85" fontSize="12" fill={this.state.fillFont}>&lt;/circle&gt;</text>
				</svg>
			</div> 
		</div>)
	}
}
export default connect()(UserInputCircle);