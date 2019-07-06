import React from 'react';
import Circle from './Circle';
import {click} from './clickToShowCode.js'

class ClickCircle extends React.Component{
	constructor(props) {
	    super(props);
	    this.click = click.bind(this);
	    this.state = {r: '100', fill: 'blue', opacity: 1, zIndex : 1, clicked : false};
	}

	render() {
		return(
		<div className='flipHolder' onClick={this.click}>
			<div className='card' style={{opacity:this.state.opacity, zIndex:this.state.zIndex}}>
				<Circle />
			</div>
	        <div className='card'>
		        <svg viewBox="0 0 100 100">
		  			<text x="30" y="25" fontSize="12" fill="black">&lt;circle</text>
		   			<text x="33" y="45" fontSize="12" fill="black">r="{this.state.r}"</text>
		  			<text x="26" y="65" fontSize="12" fill="black">fill="{this.state.fill}"&gt;</text>
		  			<text x="29" y="85" fontSize="12" fill="black">&lt;/circle&gt;</text>
				</svg>
			</div> 
		</div>
		)
	}
}


export default ClickCircle;
