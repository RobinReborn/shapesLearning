import React from 'react';
import ClickCircle from './ClickCircle';
import ClickRectangle from './ClickRectangle';
import ClickTriangle from './ClickTriangle';
import PropTypes from 'prop-types'
import {shapeArray} from './shapeArray';


const Shape = ({shape,updateShape,level} ) => {
	console.log(shape)
	switch (level) {
		case 0 : {
			switch (shape) {
				case 'circle': {
					return <ClickCircle update={updateShape}/>
				}
				case 'rectangle' : {
					return <ClickRectangle/>
				}
				case 'triangle' : {
					return <ClickTriangle/>
				}
				default : {
					return <div/>
				}
			}
		}
		default : { 
			return <div/>
		}
	}
}

Shape.propTypes = {
	shape: PropTypes.string.isRequired,
	level: PropTypes.number.isRequired,
	onClick: PropTypes.func.isRequired
}

export default Shape;