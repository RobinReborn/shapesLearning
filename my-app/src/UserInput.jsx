import React from 'react';
import ClickShape from './ClickShape';
import DragAttrShape from './DragAttrShape';

class UserInput extends React.Component{
	constructor(props) {
	    super(props);
	}

	render(){
		switch (this.props.level) {
			case 0: {
				return(<ClickShape shape={this.props.shape} update={this.props.update}/>)
			}
			case 1: {
				return(<DragAttrShape shape={this.props.shape} update={this.props.update}/>)
			}
		}
	}
}
export default UserInput;
