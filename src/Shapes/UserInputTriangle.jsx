import React from 'react';
import {instructionIncrement, incrementShape} from '../actions'
import { connect } from "react-redux";


class UserInputTriangle extends React.Component {
	constructor(props) {
    	super(props);
    	this.setFill = this.setFill.bind(this);
    	this.state = {fill: 'black', fillFont: 'white'}
    	this.update = this.props.update.bind(this);
    	this.click = this.click.bind(this);
	}
	setFill = color => {
		this.setState({fill: color.target.value, fillFont: 'black'})
	}
	click() {
		if (this.state.fill === 'green') {
			const {dispatch} = this.props;
			dispatch(instructionIncrement())
        	dispatch(incrementShape())
    	}
    }

	render() {
		return(<div className='flipHolder' onClick={this.click}>
					<div className='card' style={{opacity:this.state.opacity, zIndex:this.state.zIndex}}>
						<svg viewBox="0 0 100 100">
							<polygon points="0 95, 100 95, 50,9" fill={this.state.fill}/>
						</svg>
					</div>
					<div className='card'>
				        <svg viewBox="0 0 100 100">
				  			<text x="34" y="55" fontSize="8" fill={this.state.fillFont}>&lt;polygon</text>
				   			<text x="27" y="68" fontSize="8" fill={this.state.fillFont}>points="10 80,</text>
				  			<text x="29" y="81" fontSize="8" fill={this.state.fillFont}>90 80, 50 30"</text>
				  			<text x="17" y="93" fontSize="8" fill={this.state.fillFont}>fill="</text>
				  			<foreignObject x="35" y="76" width="25" height="30"><input type='text' onChange={this.setFill}/></foreignObject>
				  			<text x="59" y="93" fontSize="8" fill={this.state.fillFont}>"&lt;/polgon&gt;</text>
						</svg>
					</div>
				</div>)
		}
	}

export default connect()(UserInputTriangle);