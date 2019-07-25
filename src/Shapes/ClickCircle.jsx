import React from 'react';
import Circle from './Circle';
import {click} from './clickToShowCode.js'
import {connect} from "react-redux";

class ClickCircle extends React.Component{
	constructor(props) {
	    super(props);
	    this.click = click.bind(this);
	    this.state = {opacity: 1, zIndex : 1, clicked : false};
	    this.update = this.props.update.bind(this);
	}
	
	render() {
		return(
		<div className='flipHolder' onClick={this.click}>
			<div className='card' style={{opacity:this.state.opacity, zIndex:this.state.zIndex}}>
				<Circle />
			</div>
	        <div className='card'>
		        <svg viewBox="0 0 100 100" className='ClickShape'>
		  			<text x="32" y="25"  fill="black">&lt;circle</text>
		   			<text x="33" y="45"  fill="black">r="100"</text>
		  			<text x="26" y="65"  fill="black">fill="blue"&gt;</text>
		  			<text x="29" y="85"  fill="black">&lt;/circle&gt;</text>
				</svg>
			</div> 
		</div>
		)
	}
}

export default connect()(ClickCircle);
