import React from 'react';
import UserInput from './UserInput';
import DesiredOutput from './DesiredOutput';
import Instructions from './Instructions';
import {shapeArray} from './shapeArray';

class Layout extends React.Component{
	constructor(props) {
	    super(props);
	    this.state = {level: 1, shape: 0, instruction:0};
	    this.shapeUpgrade = this.shapeUpgrade.bind(this);
	    this.update = this.update.bind(this);
	}
	update(e) {
		if (e === 'updateInstructions'){
			this.setState({instruction: this.state.instruction + 1})
		}
		if (e === 'updateShape'){
			this.shapeUpgrade()
		}
	}
	shapeUpgrade(){
		if (shapeArray.length-1 > this.state.shape){
			this.setState({shape: this.state.shape + 1})
		}
		else {
			this.setState({level: this.state.level + 1, shape: 0});
		}
	}
	render(){
			const instructionsArray = ['Click on the circle on the left to see the code that generates it', 'Click again to see the next shape',
			"Click on the rectangle on the left to see the code that generates it", 'Click again to see the next shape'];

		return(
			<div>
			<Instructions text={instructionsArray[this.state.instruction]}/>
			<div className='drawHolder'>
				<div className = 'objectHolder'>
					<UserInput level={this.state.level} shape={shapeArray[this.state.shape]} update={this.update}/>
				</div>
				<div className = 'objectHolder'>
					<DesiredOutput level={this.state.level} shape={shapeArray[this.state.shape]} />
				</div>
			</div>
			</div>
			);
	}
}

export default Layout;