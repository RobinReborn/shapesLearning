import React from 'react';
import ReactDOM from 'react-dom';
import Circle from './Circle';
import ShapeCode from './ShapeCode';

class CircleCode extends React.Component {
// 	function toggle(){
//     if (document.getElementById('graph').style.opacity != 0.2) {
//         document.getElementById('graph').style.opacity = 0.2
//         document.getElementById('code').style.display = 'block'
//     }
//     else {
//         document.getElementById('graph').style.opacity = 1
//         document.getElementById('code').style.display = 'none'        
//     }
// }
	constructor(props) {
	    super(props);
	    this.state = {isToggleOn: false};

	    // This binding is necessary to make `this` work in the callback
	    this.toggle = this.toggle.bind(this);
  	}
  	toggle() {
  		this.setState(({
  			isToggleOn: !this.state.isToggleOn
  		}));
  	}
  	changeCode() {

  	}

	render() {
		return (
			<div onClick={this.toggle}>
		{this.state.isToggleOn ? <Circle/> : <ShapeCode/>}
		</div>
    	);
	}
}

export default CircleCode;