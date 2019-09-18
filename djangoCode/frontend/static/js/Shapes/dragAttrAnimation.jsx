import React from 'react';
import {instructionIncrement, incrementShape, resetSnap} from '../actions';
import {connect} from "react-redux";
import CircleAnimation from "./CircleAnimation"
const DragAttrAnimation = ({ dispatch, snapped }) => {
	function checkSnapFinished() {
		let check = true;
		if (snapped !== []){
			for (let x=0;x<4;x++){
				if (!snapped[x]){
					check = false;
				}
			}
			if (check){
				dispatch(incrementShape())
				dispatch(resetSnap())
				dispatch(instructionIncrement())
			}
		}
	}
<circle r='10' fill='blue' cx='0' cy='50'>
					    
		return(
			<div className='flipHolder'>
				<div className='card'>
					<CircleAnimation />
				</div>
				<div className='card' onClick={() => checkSnapFinished()}>
					<svg viewBox="0 0 100 15"/>
					<svg viewBox="0 0 100 18">{snapped[0] ? <text className="dragged" x="32" y="12" fontSize="8" fill="black">&lt;circle r='10' fill='blue' cx='0' cy='50'&gt;</text> : 
					<rect x="0" y="0" width="100" height="13" fill="grey"/>}</svg>
					<svg viewBox="0 0 100 18">{snapped[1] ? <text className="dragged" x='30' y='12' fontSize="8" fill="black">&lt;animate attributeName="cx" from="0" to="100"
        					dur="10s" repeatCount="indefinite"/&gt;</text> : 
					<rect x='0' y='0' width="100" height="13" fill="grey"/>}</svg>
					<svg viewBox="0 0 100 18">{snapped[2] ? <text className="dragged" x="20" y="12" fontSize="8" fill="black">&lt;/circle&gt;</text> : 
					<rect x="0" y="0" width="100" height="13" fill="grey"/>}</svg>
				</div>
			</div>
			)
	}

const mapStateToProps = (state) => {
	return {snapped: state.snapReducer.snapped}};


export default connect(mapStateToProps)(DragAttrCircle);