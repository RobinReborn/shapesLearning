import React from 'react';
import ReactDOM from 'react-dom';

class CircleCode extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {isToggleOn: false};
	    this.toggle = this.toggle.bind(this);
  	}
  	toggle() {
  		this.setState({
			opacity : this.state.opacity == 1 ? 0.2 : 1
		})
  	}
  	changeCode() {

  	}

	render() {
		return (
			<div className='flipHolder' onClick={this.toggle}>
			<div className='card' style={{opacity:this.state.opacity}} onClick={this.toggle}>
			<svg width="35em" height="35em" id="svgholder">
				<circle id="blueCircle" r="350" fill="blue" cx="350" cy="350" onClick={this.toggle}></circle>
			</svg>
			</div>
			<div id='code' className='code card'>
	            <p>
		            <br/>
		            &lt;circle id=
		            <br/>
		            "blueCircle"
		            <br/>
		            r=<input type='text' value="350" onChange={this.changeCode}></input> 
		            <br/>
		            fill=<input type='text' value="blue" onChange={this.changeCode}></input> 
		            <br/>
		            cx=<input type='text' value="350" onChange={this.changeCode}></input> 
		            <br/>
		            cy=<input type='text' value="350" onChange={this.changeCode}></input>&gt;
		            <br/>
		            &lt;/circle&gt; 
	            </p>
	        </div>
		</div>
    	);
	}
}

export default CircleCode;