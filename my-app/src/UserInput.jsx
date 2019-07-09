import React from 'react';
import ClickShape from './ClickShape';
import DragAttrShape from './DragAttrShape';
import UserInputShape from './UserInputShape';

class UserInput extends React.Component{

	render(){
		switch (this.props.level) {
			case 0: {
				return(<ClickShape shape={this.props.shape} update={this.props.update} />)
			}
			case 1: {
				return(<DragAttrShape shape={this.props.shape} update={this.props.update} snapped={this.props.snapped}/>)
			}
			case 2: {
				return(<UserInputShape shape={this.props.shape} update={this.props.update}/>)
			}
		}
	}
}
export default UserInput;
