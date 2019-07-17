import React from 'react';
import PropTypes from 'prop-types'
import Circle from './Shapes/Circle';
import Rectangle from './Shapes/Rectangle';
import Triangle from './Shapes/Triangle';

const DesiredOutput = ({shape,update,level,snapped} ) => {
	switch (level) {
		case 0 : {
			switch (shape) {
				case 'circle': {
					return <Circle update={update}/>
				}
				case 'rectangle' : {
					return <Rectangle update={update}/>
				}
				case 'triangle' : {
					return <Triangle update={update}/>
				}
				default : {
					return <div/>
				}
			}
		}
		case 1 : {
			switch (shape) {
				case 'circle': {
						return <Circle attr={true} update={update} snapped={snapped}/>
					}
					case 'rectangle' : {
						return <Rectangle update={update} attr={true} snapped={snapped}/>
					}
					case 'triangle' : {
						return <Triangle update={update} attr={true} snapped={snapped}/>
					}
					default : {
						return <div/>
					}
				}
			}
		case 2 : {
			switch (shape) {
				case 'circle': {
					return <Circle update={update}/>
				}
				case 'rectangle' : {
					return <Rectangle update={update}/>
				}
				case 'triangle' : {
					return <Triangle update={update}/>
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
	update: PropTypes.func.isRequired
}
export default DesiredOutput;
