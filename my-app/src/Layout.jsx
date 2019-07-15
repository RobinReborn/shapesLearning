import React from 'react';
import UserInput from './UserInput';
import DesiredOutput from './DesiredOutput';
import Instructions from './Instructions';
import {shapeArray} from './shapeArray';
import ShowShape from './ShowShape';

class Layout extends React.Component{
	constructor(props) {
	    super(props);
	    this.state = {level: 0, shape: 0, instruction:0, snapped: []};
	    this.updateShape = this.updateShape.bind(this);
	    this.update = this.update.bind(this);
	}
	update(e) {
		switch (e[0]) {
		case 'updateInstructions': {
			this.setState({instruction: this.state.instruction + 1})
			break;
		}
		case 'updateShape': {
			this.updateShape()
			break;
		}
		case 'snapToShape': {
			let snappedArray = this.state.snapped 
			snappedArray[e[1]] = true
			console.log(snappedArray);
			this.setState({snapped: snappedArray})
			break;
		}
		default: {
			break;
		}
	}
	}
	updateShape(){
		this.setState({snapped: []})
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
				<ShowShape shape={this.state.shape} onClick={this.update} level={this.state.level}/>
{/*					<UserInput level={this.state.level} shape={shapeArray[this.state.shape]} update={this.update} snapped={this.state.snapped}/>
*/}				</div>

				<div className = 'objectHolder'>
					<DesiredOutput level={this.state.level} shape={shapeArray[this.state.shape]} update={this.update} />
				</div>
			</div>
			</div>
			);
	}
}

export default Layout;