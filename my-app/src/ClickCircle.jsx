import React from 'react';
import Circle from './Circle';

class ClickCircle extends React.Component{
	constructor(props) {
	    super(props);
	    this.click = this.click.bind(this);
	    this.state = {r: '100', fill: 'blue', opacity: 1, zIndex : 1, clicked : false};
	}
	click() {
		if (!this.state.clicked){
	  		this.setState({
				opacity : this.state.opacity === 1 ? 0.2 : 1,
				zIndex: this.state.zIndex === 1 ? -1 : 1,
				clicked: true
			})
  		}
  		else {
  			this.props.shapeUpgrade()
  		}
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
		   			<text x="35" y="45" fontSize="12" fill="black">r={this.state.r}</text>
		  			<text x="28" y="65" fontSize="12" fill="black">fill={this.state.fill}&gt;</text>
		  			<text x="29" y="85" fontSize="12" fill="black">&lt;/circle&gt;</text>
				</svg>
			</div> 
		</div>
		)
	}
}


export default ClickCircle;
