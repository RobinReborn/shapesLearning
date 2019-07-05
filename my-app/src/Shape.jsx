import React from 'react';
import Circle from './Circle';
import Rectangle from './Rectangle';

class Shape extends React.Component{
	render(){
		switch (this.props.shape) {
			case 'circle': {
				return(<Circle/>)
			}
			case 'rectangle' : {
				return(<Rectangle/>)
			}
		}
	}
}

export default Shape;