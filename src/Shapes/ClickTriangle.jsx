import React from 'react';
import Triangle from './Triangle';
import {click} from './clickToShowCode.js'
import {connect} from "react-redux";

class ClickTriangle extends React.Component{
	constructor(props) {
	    super(props);
	    this.click = click.bind(this);
	    this.state = {opacity: 1, zIndex : 1, clicked : false};
	}

	render() { 
		return(
			<div className='flipHolder' onClick={this.click}>
				<div className='card' style={{opacity:this.state.opacity, zIndex:this.state.zIndex}}>
					<Triangle />
				</div>
		        <div className='card'>
			        <svg viewBox="0 0 100 100" className='ClickTriangle'>
			  			<text x="38" y="55"  fill="black">&lt;polygon</text>
			   			<text x="31" y="68"  fill="black">points="10 80,</text>
			  			<text x="33" y="81"  fill="black">90 80, 50 30"</text>
			  			<text x="23" y="93"  fill="black">fill="green"&lt;/polygon&gt;</text>
					</svg>
				</div> 
			</div>
		)
	}
}

export default connect()(ClickTriangle);