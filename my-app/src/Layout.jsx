import React from 'react';
import UserInput from './UserInput';
import DesiredOutput from './DesiredOutput';
class Layout extends React.Component{
	constructor(props) {
	    super(props);
	    this.state = {level: 1, shape: 0}
	}
	handleAdvanceLevel(){
		this.setState = {level: this.state.level + 1}
	}
	render(){
			const shapeArray = ['circle']

		return(
			<div className='drawHolder'>
				<div className = 'objectHolder'>
					<UserInput level={this.state.level} shape={shapeArray[this.state.shape]} />
				</div>
				<div className = 'objectHolder'>
					<DesiredOutput level={this.state.level} shape={shapeArray[this.state.shape]} />
				</div>
			</div>
			);
	}
}

export default Layout;