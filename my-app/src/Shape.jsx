import React from 'react';
import Circle from './Circle';
import Rectangle from './Rectangle';
import Triangle from './Triangle';

class Shape extends React.Component{
	render(){

		switch (this.props.shape) {
			case 'circle': {
				return(<Circle attr={this.props.attr} update={this.props.update}/>)
			}
			case 'rectangle' : {
				return(<Rectangle attr={this.props.attr} update={this.props.update}/>)
			}
			case 'triangle' : {
				return(<Triangle attr={this.props.attr} update={this.props.update}/>)
			}
			default: {
			break;
			}
		}
	}
}

export default Shape;