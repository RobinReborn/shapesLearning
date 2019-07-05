import React from 'react';
import Shape from './Shape';

class DesiredOutput extends React.Component{
	constructor(props) {
	    super(props);
	}

	render(){
		return(<Shape shape={this.props.shape}/>)
	}
}
export default DesiredOutput;
