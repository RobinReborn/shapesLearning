import React from 'react';
import Triangle from './Triangle';
import {click} from './clickToShowCode.js'

class ClickTriangle extends React.Component{
	constructor(props) {
	    super(props);
	    this.click = click.bind(this);
	    this.state = {points: ["10 80", "90 80", "50 30"], fill: 'green', opacity: 1, zIndex : 1, clicked : false};
	}

	render() { 
		return(
			<div className='flipHolder' onClick={this.click}>
				<div className='card' style={{opacity:this.state.opacity, zIndex:this.state.zIndex}}>
					<Triangle />
				</div>
		        <div className='card'>
			        <svg viewBox="0 0 100 100">
			  			<text x="34" y="55" fontSize="8" fill="black">&lt;polygon</text>
			   			<text x="27" y="68" fontSize="8" fill="black">points="{this.state.points[0]},</text>
			  			<text x="29" y="81" fontSize="8" fill="black">{this.state.points[1]}, {this.state.points[2]}"</text>
			  			<text x="17" y="93" fontSize="8" fill="black">fill="{this.state.fill}"&lt;/polgon&gt;</text>
					</svg>
				</div> 
			</div>
		)
	}
}

export default ClickTriangle;