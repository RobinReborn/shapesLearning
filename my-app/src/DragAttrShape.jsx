import React from 'react';
import DragAttrCircle from './DragAttrCircle';
import DragAttrRectangle from './DragAttrRectangle';
import DragAttrTriangle from './DragAttrTriangle';

class DragAttrShape extends React.Component{
	render() {
		switch (this.props.shape) {
			case 'circle': {
				return(<DragAttrCircle snapped={this.props.snapped} update={this.props.update}/>)
			}
			case 'rectangle': {
				return(<DragAttrRectangle snapped={this.props.snapped} update={this.props.update}/>)
			}
			case 'triangle': {
				return(<DragAttrTriangle snapped={this.props.snapped} update={this.props.update}/>)
			}
			default: {
				break;
			}
		}
	}
}
export default DragAttrShape;