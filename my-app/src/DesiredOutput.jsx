import React from 'react';
import { connect } from "react-redux";
import ClickShape from './ClickShape';
import DragAttrShape from './DragAttrShape';
import UserInputShape from './UserInputShape';
import {INCREMENT_SHAPE} from './redux/actionTypes';
import PropTypes from 'prop-types'
import Circle from './Circle';
import Rectangle from './Rectangle';
import Triangle from './Triangle';
import Shape from './Shape';
import ClickCircle from './ClickCircle';
import ClickRectangle from './ClickRectangle';
import ClickTriangle from './ClickTriangle';
import DragAttrTriangle from './DragAttrTriangle';
import DragAttrCircle from './DragAttrCircle';
import DragAttrRectangle from './DragAttrRectangle';
import {getShape, incrementShape} from './redux/actions';

const DesiredOutput = ({shape,update,level,snapped} ) => {
/*	console.log(this.props.dispatch(getShape()))
*/	switch (level) {
		case 0 : {
			switch (shape) {
				case 'circle': {
					return <Circle/>
				}
				case 'rectangle' : {
					return <Rectangle/>
				}
				case 'triangle' : {
					return <Triangle/>
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
						return <DragAttrRectangle update={update}/>
					}
					case 'triangle' : {
						return <DragAttrTriangle update={update}/>
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
