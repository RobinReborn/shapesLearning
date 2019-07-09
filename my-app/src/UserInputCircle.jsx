import React from 'react';
import Circle from './Circle';

class UserInputCircle extends React.Component {
	constructor(props) {
    	super(props);
    	this.setFill = this.setFill.bind(this);
	}
	setFill(color) {
		
	}

	render() {

		return (<div className='flipHolder' onClick={this.click}>
			<div className='card'>
				<Circle />
			</div>
	        <div className='card'>
		        <svg viewBox="0 0 100 100">
		  			<text x="32" y="25" fontSize="12" fill="black">&lt;circle</text>
		   			<text x="33" y="45" fontSize="12" fill="black">r=</text>
		   			<foreignObject x="48" y="27" width="30" height="30"><input type='text' onChange={this.setFill}/></foreignObject>
		  			<text x="26" y="65" fontSize="12" fill="black">fill="blue"&gt;</text>
		  			<text x="29" y="85" fontSize="12" fill="black">&lt;/circle&gt;</text>
				</svg>
			</div> 
		</div>)
	}
}
export default UserInputCircle;