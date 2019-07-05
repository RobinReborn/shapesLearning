import React from 'react';
import Rectangle from './Rectangle';

class ClickRectangle extends React.Component{
	constructor(props) {
	    super(props);
	    this.click = this.click.bind(this);
	    this.state = {width: 100, height: 80, fill: 'red', opacity: 0.2, zIndex : 1, clicked : false};
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
					<Rectangle />
				</div>
		        <div className='card'>
			        <svg viewBox="0 0 100 100">
			  			<text x="12" y="38" fontSize="12" fill="black">&lt;rect width={this.state.width}</text>
			   			<text x="2" y="53" fontSize="12" fill="black">height={this.state.height} fill={this.state.fill}&gt;</text>
			  			<text x="33" y="68" fontSize="12" fill="black">&lt;/rect&gt;</text>
					</svg>
				</div> 
			</div>
		)
	}
}

export default ClickRectangle;