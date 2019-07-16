import React from 'react';
import PropTypes from 'prop-types'
import ClickCircle from './ClickCircle';
import ClickRectangle from './ClickRectangle';
import ClickTriangle from './ClickTriangle';
import DragAttrTriangle from './DragAttrTriangle';
import DragAttrCircle from './DragAttrCircle';
import DragAttrRectangle from './DragAttrRectangle';

const UserInput = ({shape,update,level,snapped} ) => {
	switch (level) {
		case 0 : {
			switch (shape) {
				case 'circle': {
					return <ClickCircle update={update}/>
				}
				case 'rectangle' : {
					return <ClickRectangle update={update}/>
				}
				case 'triangle' : {
					return <ClickTriangle update={update}/>
				}
				default : {
					return <div/>
				}
			}
		}
		case 1 : {
			switch (shape) {
				case 'circle': {
						return <DragAttrCircle update={update} snapped={snapped}/>
					}
					case 'rectangle' : {
						return <DragAttrRectangle update={update} snapped={snapped}/>
					}
					case 'triangle' : {
						return <DragAttrTriangle update={update} snapped={snapped}/>
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
