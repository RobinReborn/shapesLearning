import React from 'react';
import Circle from './Circle';

class Shape extends React.Component{
	render(){
		switch (this.props.shape) {
			case 'circle': {
				return(<Circle/>)
			}
		}
	}
}

export default Shape;