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
import UserInputTriangle from './Shapes/UserInputTriangle'

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
		default : { 
			return <div/>
		}
	}
}

UserInput.propTypes = {
	shape: PropTypes.string.isRequired,
	level: PropTypes.number.isRequired,
	update: PropTypes.func.isRequired
}
export default UserInput;
