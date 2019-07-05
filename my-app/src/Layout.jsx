import React from 'react';
import UserInput from './UserInput';
import DesiredOutput from './DesiredOutput';
import Instructions from './Instructions';

class Layout extends React.Component{
	constructor(props) {
	    super(props);
	    this.state = {level: 0, shape: 1, instruction:0};
	    this.shapeUpgrade = this.shapeUpgrade.bind(this);
	}
	shapeUpgrade(){
		this.setState({shape: this.state.shape + 1})
	}
	render(){
			const shapeArray = ['circle','rectangle'];
			const instructionsArray = ['Click on the circle on the left to see the code that generates it', 'Click again to see the next shape'];

		return(
			<div>
			<Instructions text={instructionsArray[this.state.instruction]}/>
			<div className='drawHolder'>
				<div className = 'objectHolder'>
					<UserInput level={this.state.level} shape={shapeArray[this.state.shape]} shapeUpgrade={this.shapeUpgrade}/>
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