import React from 'react';
import ReactDOM from 'react-dom';
import CodeOutput from './CodeOutput';

class CircleCode extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {r: '350', fill: 'blue', cx: '350', cy: '350'};
	    this.toggle = this.toggle.bind(this);
	    this.changeCode = this.changeCode.bind(this);
  	}
  	toggle() {
  		this.setState({
			opacity : this.state.opacity == 1 ? 0.2 : 1
		})
  	}
  	preventDefault = e => {
  		e.stopPropagation();
  	}
  	changeCode = e => {
	    const {name, value} = e.target;
	    this.setState(() => ({
	      [name]: value
	    }))
  	}

	render() {
		return (
			<div className='drawHolder'>
				<div className='flipHolder' onClick={this.toggle}>
					<div className='card' style={{opacity:this.state.opacity}} onClick={this.toggle}>
						<svg width="35em" height="35em" id="svgholder">
							<circle id="blueCircle" r="350" fill="blue" cx="350" cy="350" onClick={this.toggle}></circle>
						</svg>
					</div>
					<div id='code' className='code card'>
			            <p>
			            	{/* this can be defined as component (with subcomponents for inputs) later */}
				            <br/>
				            &lt;circle id=
				            <br/>
				            "blueCircle"
				            <br/>
				            r=<input type='text' name='r' value={this.state.r} onChange={this.changeCode} onClick={this.preventDefault}></input> 
				            <br/>
				            fill=<input type='text' name='fill' value={this.state.fill} onChange={this.changeCode} onClick={this.preventDefault}></input> 
				            <br/>
				            cx=<input type='text' name='cx' value={this.state.cx} onChange={this.changeCode} onClick={this.preventDefault}></input> 
				            <br/>
				            cy=<input type='text' name='cy' value={this.state.cy} onChange={this.changeCode} onClick={this.preventDefault}></input>&gt;
				            <br/>
				            &lt;/circle&gt; 
			            </p>
			        </div>
				</div>
				<CodeOutput r={this.state.r} fill={this.state.fill} cx={this.state.cx} cy={this.state.cy} />
			</div>
    	);
	}
}

export default CircleCode;