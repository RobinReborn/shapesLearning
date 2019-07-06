import React from 'react';
import Circle from './Circle';
import Rectangle from './Rectangle';
import Triangle from './Triangle';

class Shape extends React.Component{
	render(){
		switch (this.props.shape) {
			case 'circle': {
				return(<Circle/>)
			}
			case 'rectangle' : {
				return(<Rectangle/>)
			}
			case 'triangle' : {
				return(<Triangle/>)
			}
		}
	}
}

export default Shape;