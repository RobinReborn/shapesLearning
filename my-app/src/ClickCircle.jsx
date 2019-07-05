import React from 'react';
import Circle from './Circle';

class ClickCircle extends React.Component{
	constructor(props) {
	    super(props);
	    this.toggle = this.toggle.bind(this);
	    this.state = {r: '100', fill: 'blue', opacity: 1, zIndex : 1};
	}
	toggle() {
  		this.setState({
			opacity : this.state.opacity === 1 ? 0.2 : 1,
			zIndex: this.state.zIndex === 1 ? -1 : 1
		})
  	}

	render() {
		return(
		<div className='flipHolder' onClick={this.toggle}>
			<div className='card' style={{opacity:this.state.opacity, zIndex:this.state.zIndex}}>
				<Circle />
			</div>
			<div id='code' className='code card'>
	            <br/>
	            &lt;circle
	            <br/>
	            r={this.state.r}
	            <br/>
	            fill={this.state.fill}&gt;
	            <br/>
	            &lt;/circle&gt;
	        </div>
		</div>
		)
	}
}


export default ClickCircle;
