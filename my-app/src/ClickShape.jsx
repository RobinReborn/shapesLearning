import React from 'react';
import ClickCircle from './ClickCircle';
import ClickRectangle from './ClickRectangle';

class ClickShape extends React.Component{
	render() {
		switch (this.props.shape) {
			case 'circle': {
				return(<ClickCircle shapeUpgrade={this.props.shapeUpgrade}/>)
			}
			case 'rectangle': {
				return(<ClickRectangle shapeUpgrade={this.props.shapeUpgrade}/>)
			}
		}
	}
}


export default ClickShape;
