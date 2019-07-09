import React from 'react';
import UserInputCircle from './UserInputCircle';

class UserInputShape extends React.Component{
	render(){
		switch (this.props.shape) {
			case 'circle': {
				return(<UserInputCircle attr={this.props.attr} update={this.props.update}/>)
			}
			/*case 'rectangle' : {
				return(<UserInputRectangle attr={this.props.attr} update={this.props.update}/>)
			}
			case 'triangle' : {
				return(<UserInputTriangle attr={this.props.attr} update={this.props.update}/>)
			}*/
			default: {
				break;
			}
		}	
	}
}

export default UserInputShape;