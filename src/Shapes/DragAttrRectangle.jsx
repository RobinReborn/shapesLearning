import React from 'react';
import Rectangle from './Rectangle';
import {snapGet, incrementShape, resetSnap, instructionIncrement} from '../actions';
import {connect} from "react-redux";

const DragAttrRectangle = ({ dispatch, snapped }) => {
	function checkFinished() {
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
	
		return(
			<div className='flipHolder'>
				<div className='card'>
					<Rectangle />
				</div>
				<div className='card' onClick={() => checkFinished()}>
					<svg viewBox="0 0 100 17"/>
					<svg viewBox="0 0 100 17">{snapped[0] ? <text className="dragged" x="6" y="12" fontSize="12" fill="black">&lt;rect width="100"</text> : 
					<rect x="8" y="2" width="85" height="13" fill="grey"/>}</svg>
		   			<svg viewBox="0 0 100 17">{snapped[1] ? <text className="dragged" x="21" y="13" fontSize="12" fill="black">height="70"</text> : 
		   			<rect x="27" y="1" width="50" height="13" fill="grey"/>}</svg>
		  			<svg viewBox="0 0 100 17">{snapped[2] ? <text className="dragged" x="25" y="13" fontSize="12" fill="black">fill="red"&gt;</text> : 
		  			<rect x="29.5" y="0" width="45" height="13" fill="grey"/>}</svg>
					<svg viewBox="0 0 100 17">{snapped[3] ? <text className="dragged" x="33" y="13" fontSize="12" fill="black">&lt;/rect&gt;</text> : 
					<rect x="37.5" y="1" width="30" height="13" fill="grey"/>}</svg>
				</div>
			</div>
			)
	
}

const mapStateToProps = (state) => {
	return {snapped: state.snapReducer.snapped}};


export default connect(mapStateToProps)(DragAttrRectangle);