import React from 'react';
import ClickCircle from './ClickCircle';

class ClickShape extends React.Component{
	constructor(props) {
	    super(props);
	}
	
	render() {
		switch (this.props.shape) {
			case 'circle': {
				return(<ClickCircle/>)
			}
		}
	}
}


export default ClickShape;
