import React from 'react';
import Rectangle from './Rectangle';

class DragAttrRectangle extends React.Component{
	constructor(props) {
	    super(props);
	    this.click = click.bind(this);
	    this.state = {width: 100, height: 80, fill: 'red', opacity: 1, zIndex : 1, clicked : false};
	}
	

	render() { 
		return(
			<div className='card' style={{opacity:this.state.opacity, zIndex:this.state.zIndex}}>
				<Rectangle />
			</div>
		)
	}
}

export default ClickRectangle;