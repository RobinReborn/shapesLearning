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

const UserInput = ({shape}) => (
	<Shape shape={shape}/> )

UserInput.propTypes = {shape: PropTypes.number.isRequired}
/*class UserInput extends React.Component{

	render(){
		switch (this.props.level) {
			case 0: {
				return(<ClickShape shape={this.props.shape} update={this.props.update} />)
			}
			case 1: {
				return(<DragAttrShape shape={this.props.shape} update={this.props.update} snapped={this.props.snapped}/>)
			}
			case 2: {
				return(<UserInputShape shape={this.props.shape} update={this.props.update}/>)
			}
		}
	}
}*/
export default UserInput;
