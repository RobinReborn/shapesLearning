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
import CircleAnimation from './Shapes/CircleAnimation'
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
					return <SVGCreator svg='<circle r="50" fill="blue"> </circle>' offset='-50 -50 100 100'/>
				}
				case 'rectangle' : {
					return <SVGCreator svg='<rect width="100" height="70" fill="red"> </rect>' offset='0 -18 100 100'/>
				}
				case 'triangle' : {
					return <SVGCreator svg='<polygon points="0 95, 100 95, 50 9" fill="green"> </polygon>' offset='0 0 100 100'/>
				}
				default : {
					return <div/>
				}
			}
		}
		case 4:{
			switch (shape) {
				/*case 'circle': {
					return <CircleAnimation/>
				}*/
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
