import React from 'react'
import PropTypes from 'prop-types'
import Shape from './Shape'
import {shapeArray} from './shapeArray';

const shapeDisplay = ({shape,onClick}) => (
	<Shape shape=shapeArray[state.shape] onClick={onClick}/>
		)
Shape.propTypes = {
	shape:PropTypes.number.isRequired
	onClick:PropTypes.function.isRequired
}

export default shapeDisplay;