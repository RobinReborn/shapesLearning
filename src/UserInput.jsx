import React from 'react';
import PropTypes from 'prop-types'
import ClickCircle from './Shapes/ClickCircle';
import ClickRectangle from './Shapes/ClickRectangle';
import ClickTriangle from './Shapes/ClickTriangle';
import DragAttrTriangle from './Shapes/DragAttrTriangle';
import DragAttrCircle from './Shapes/DragAttrCircle';
import DragAttrRectangle from './Shapes/DragAttrRectangle';
import UserInputCircle from './Shapes/UserInputCircle';
import UserInputRectangle from './Shapes/UserInputRectangle';
import UserInputTriangle from './Shapes/UserInputTriangle';
import SVGCreator from './Shapes/SVGCreator';

const UserInput = ({shape,update,level} ) => {
	switch (level) {
		case 0 : {
			switch (shape) {
				case 'circle': {
					return <ClickCircle/>
				}
				case 'rectangle' : {
					return <ClickRectangle />
				}
				case 'triangle' : {
					return <ClickTriangle/>
				}
				default : {
					return <div/>
				}
			}
		}
		case 1 : {
			switch (shape) {
				case 'circle': {
						return <DragAttrCircle/>
					}
					case 'rectangle' : {
						return <DragAttrRectangle/>
					}
					case 'triangle' : {
						return <DragAttrTriangle/>
					}
					default : {
						return <div/>
					}
				}
			}
		case 2 :{
			switch (shape) {
				case 'circle': {
					return <UserInputCircle/>
				}
				case 'rectangle' : {
					return <UserInputRectangle />
				}
				case 'triangle' : {
					return <UserInputTriangle />
				}
				default : {
					return <div/>
				}
			}
		}
		case 3 :{
			switch (shape) {
				case 'circle': {
					return <SVGCreator svg='<circle r="50" cx="50" cy="50" fill="blue"/>'/>
				}
				case 'rectangle' : {
					return <SVGCreator />
				}
				case 'triangle' : {
					return <SVGCreator />
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

UserInput.propTypes = {
	shape: PropTypes.string.isRequired,
	level: PropTypes.number.isRequired,
}
export default UserInput;
