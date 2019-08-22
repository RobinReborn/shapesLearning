import React from 'react';
import {instructionIncrement, incrementShape} from '../actions'
import { connect } from "react-redux";


class UserInputRectangle extends React.Component {
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
		if (this.state.fill === 'red') {
			const {dispatch} = this.props;
			dispatch(instructionIncrement())
			dispatch(incrementShape())
    	}
    }

	render() {
		return(<div className='flipHolder' onClick={this.click}>
				<div className='card' style={{opacity:this.state.opacity, zIndex:this.state.zIndex}}>
					<svg viewBox="0 0 100 100">
							<rect width= "100" height="70" y="25" fill={this.state.fill}/>
						</svg>
				</div>
				<div className='card'>
			        <svg viewBox="0 0 100 100">
			  			<text x="5" y="42" fontSize="12" fill={this.state.fillFont}>&lt;rect width="100"</text>
			   			<text x="24" y="58" fontSize="12" fill={this.state.fillFont}>height="70"</text>
			  			<text x="27" y="73" fontSize="12" fill={this.state.fillFont}>fill=" </text>
			  			<foreignObject x="49.5" y="56" width="39" height="30"><input type='text' onChange={this.setFill}/></foreignObject>
			  			<text x="89" y="73" fontSize="12" fill={this.state.fillFont}>"&gt;</text>
			  			<text x="35" y="87" fontSize="12" fill={this.state.fillFont}>&lt;/rect&gt;</text>
					</svg>
				</div>
			</div>)
		}
	}

export default connect()(UserInputRectangle);