import React from 'react';
import ClickCircle from './ClickCircle';
import ClickRectangle from './ClickRectangle';
import ClickTriangle from './ClickTriangle';


class ClickShape extends React.Component{
	render() {
		switch (this.props.shape) {
			case 'circle': {
				return(<ClickCircle update={this.props.update}/>)
			}
			case 'rectangle': {
				return(<ClickRectangle update={this.props.update}/>)
			}
			case 'triangle': {
				return(<ClickTriangle update={this.props.update}/>)
			}
		}
	}
}


export default ClickShape;
