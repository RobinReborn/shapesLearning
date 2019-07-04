import React from 'react';
import CodeOutput from './CodeOutput';
import AttributeHolder from './AttributeHolder';
import Draggable from 'react-draggable';

class CircleCode extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {r: '0', fill: 'blue', cx: '0', cy: '0',
	    			  desiredState : {r: String(Math.floor(Math.random() *200)), 
	    			  fill: 'blue', 
	    			  cx: String(Math.floor(Math.random() *200)), 
	    			  cy: String(Math.floor(Math.random() *200))}, 
	    opacity: 1, zIndex : 1};
	    this.toggle = this.toggle.bind(this);
	    this.draw = this.draw.bind(this);
  	}
  	toggle() {
  		this.setState({
			opacity : this.state.opacity === 1 ? 0.2 : 1,
			zIndex: this.state.zIndex === 1 ? -1 : 1
		})
  	}
  	preventDefault = e => {
  		e.stopPropagation();
  	}
  	draw = e => {
  		e.preventDefault();
  		let correct = true;
    	for (var i = 0; i < e.target.length-1; i++) {
    		let {name, value} = e.target[i]
			this.setState(() => ({
				[name]: value
			}))
			if (correct && this.state.desiredState[name] !== value) {
				correct = false;
			}
		}
		if (correct) {
			//do something here
		}
  	}

	render() {
		return (
			<div>
				<div className='drawHolder'>
					<div className='flipHolder' onClick={this.toggle}>
						<svg width="35em" height="35em" id="svgholder" className='card' style={{opacity:this.state.opacity, zIndex:this.state.zIndex}}>
							<circle id="blueCircle" r="350" fill="blue" cx="350" cy="350"/>
						</svg>
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
					<CodeOutput r={this.state.desiredState.r} fill={this.state.desiredState.fill} cx={this.state.desiredState.cx} cy={this.state.desiredState.cy}
								guessR = {this.state.r} guessFill= {this.state.fill} guesscx= {this.state.cx} guesscy= {this.state.cy} />
				</div>
				<AttributeHolder attr={this.state.desiredState} />
			</div>
    	);
	}
}

export default CircleCode;