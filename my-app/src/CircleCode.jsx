import React from 'react';
import ReactDOM from 'react-dom';
import CodeOutput from './CodeOutput';

class CircleCode extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {r: '350', fill: 'blue', cx: '350', cy: '350', opacity: 1, zIndex : 1};
	    this.toggle = this.toggle.bind(this);
	    this.changeCode = this.changeCode.bind(this);
	    this.draw = this.draw.bind(this)
  	}
  	toggle() {
  		this.setState({
			opacity : this.state.opacity == 1 ? 0.2 : 1,
			zIndex: this.state.zIndex == 1 ? -1 : 1
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
  	draw = e => {
  		e.preventDefault();
    for (var i = 0; i < e.target.length-1; i++) {
    	let {name, value} = e.target[i]
		this.setState(() => ({
			[name]: value
			}))    
		}
  	}

	render() {
		return (
			<div className='drawHolder'>
				<div className='flipHolder' onClick={this.toggle}>
					<div className='card' style={{opacity:this.state.opacity, zIndex:this.state.zIndex}} onClick={this.toggle}>
						<svg width="35em" height="35em" id="svgholder">
							<circle id="blueCircle" r="350" fill="blue" cx="350" cy="350" onClick={this.toggle}></circle>
						</svg>
					</div>
					<div id='code' className='code card'>
			            	{/* this can be defined as component (with subcomponents for inputs) later */}
				            <br/>
				            &lt;circle id=
				            <br/>
				            "blueCircle"
				            <br/>
				            <form onSubmit={this.draw} >
					            r=<input type='text' name='r' placeholder={this.state.r} onClick={this.preventDefault}/>
					            <br/>
					            fill=<input type='text' name='fill' placeholder={this.state.fill} onClick={this.preventDefault}/>
					            <br/>
					            cx=<input type='text' name='cx' placeholder={this.state.cx} onClick={this.preventDefault}/>
					            <br/>
					            cy=<input type='text' name='cy' placeholder={this.state.cy} onClick={this.preventDefault}/>&gt;
					            <br/>
					            &lt;/circle&gt;
					            <br/>
					            <input type='Submit' readOnly value='Draw' onClick={this.preventDefault}/>
				            </form>
			        </div>
				</div>
				<CodeOutput r={this.state.r} fill={this.state.fill} cx={this.state.cx} cy={this.state.cy} />
			</div>
    	);
	}
}

export default CircleCode;