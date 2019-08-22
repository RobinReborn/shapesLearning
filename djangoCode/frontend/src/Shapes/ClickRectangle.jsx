import React from 'react';
import Rectangle from './Rectangle';
import {click} from './clickToShowCode.js'
import {connect} from "react-redux";

class ClickRectangle extends React.Component{
	constructor(props) {
	    super(props);
	    this.click = click.bind(this);
	    this.state = {opacity: 1, zIndex : 1, clicked : false};
	}
	

	render() { 
		return(
			<div className='flipHolder' onClick={this.click}>
				<div className='card' style={{opacity:this.state.opacity, zIndex:this.state.zIndex}}>
					<Rectangle />
				</div>
		        <div className='card'>
			        <svg viewBox="0 0 100 100" className='ClickShape'>
			  			<text x="12" y="32" fill="black">&lt;rect width="100"</text>
			   			<text x="24" y="48" fill="black">height="80"</text>
			  			<text x="27" y="63" fill="black">fill="red"&gt; </text>
			  			<text x="35" y="77" fill="black">&lt;/rect&gt;</text>
					</svg>
				</div> 
			</div>
		)
	}
}

export default connect()(ClickRectangle);