import React from 'react';
import Rectangle from './Rectangle';
import {click} from './clickToShowCode.js'

class ClickRectangle extends React.Component{
	constructor(props) {
	    super(props);
	    this.click = click.bind(this);
	    this.state = {width: 100, height: 80, fill: 'red', opacity: 1, zIndex : 1, clicked : false};
	}
	

	render() { 
		return(
			<div className='flipHolder' onClick={this.click}>
				<div className='card' style={{opacity:this.state.opacity, zIndex:this.state.zIndex}}>
					<Rectangle />
				</div>
		        <div className='card'>
			        <svg viewBox="0 0 100 100">
			  			<text x="5" y="39" fontSize="12" fill="black">&lt;rect width="{this.state.width}"</text>
			   			<text x="24" y="54" fontSize="12" fill="black">height="{this.state.height}"</text>
			  			<text x="5" y="69" fontSize="12" fill="black">fill="{this.state.fill}"&gt; &lt;/rect&gt;</text>
					</svg>
				</div> 
			</div>
		)
	}
}

export default ClickRectangle;