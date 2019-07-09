import React from 'react';
import Shape from './Shape';

class DesiredOutput extends React.Component{
	render(){
		switch (this.props.level) {
			case 0: {
				return(<Shape shape={this.props.shape}/>)
			}
			case 1 : {
				return(<Shape shape={this.props.shape} attr={true} update={this.props.update}/>)
			}
			case 2 : {
				return(<Shape shape={this.props.shape}/>)
			}
			default: {
			break;
			}
		}
	}
}
export default DesiredOutput;
