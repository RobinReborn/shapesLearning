import React from 'react';
import PropTypes from 'prop-types'
import Circle from './Shapes/Circle';
import Rectangle from './Shapes/Rectangle';
import Triangle from './Shapes/Triangle';
import CircleElements from './Shapes/CircleElements';
import RectangleElements from './Shapes/RectangleElements';
import TriangleElements from './Shapes/TriangleElements'

const DesiredOutput = ({shape,level} ) => {
	switch (level) {
		case 0 : {
			switch (shape) {
				case 'circle': {
					return <Rectangle/> 
				}
				case 'rectangle' : {
					return <Triangle/>
				}
				case 'triangle' : {
					return <Circle/>
				}
				default : {
					return <div/>
				}
			}
		}
		case 1 : {
			switch (shape) {
				case 'circle': {
						return <CircleElements/>
					}
					case 'rectangle' : {
						return <RectangleElements />
					}
					case 'triangle' : {
						return <TriangleElements />
					}
					default : {
						return <div/>
					}
				}
			}
		case 2 : {
			switch (shape) {
				case 'circle': {
					return <Circle />
				}
				case 'rectangle' : {
					return <Rectangle />
				}
				case 'triangle' : {
					return <Triangle />
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

DesiredOutput.propTypes = {
	shape: PropTypes.string.isRequired,
	level: PropTypes.number.isRequired,
}
export default DesiredOutput;
