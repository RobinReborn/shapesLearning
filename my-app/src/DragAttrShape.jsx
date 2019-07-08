import React from 'react';
import DragAttrCircle from './DragAttrCircle';

class DragAttrShape extends React.Component{
	render() {
		switch (this.props.shape) {
			case 'circle': {
				return(<DragAttrCircle snapped={this.props.snapped}/>)
			}
			/*case 'rectangle': {
				return(<DragAttrRectangle update={this.props.update}/>)
			}
			case 'triangle': {
				return(<DragAttrTriangle update={this.props.update}/>)
			}*/
		}
	}
}
export default DragAttrShape;