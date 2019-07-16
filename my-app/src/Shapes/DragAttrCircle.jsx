import React from 'react';
import Circle from './Circle';
import {snapGet, incrementShape, resetSnap} from '../actions';
import {connect} from "react-redux";

const DragAttrCircle = ({ dispatch, snapped }) => {
	function checkSnapFinished() {
		let check = true;
		if (snapped !== []){
			for (let x=0;x<3;x++){
				if (!snapped[x]){
					check = false;
				}
			}
			if (check){
				dispatch(incrementShape())
				dispatch(resetSnap())
			}
		}
	}

		return(
			<div className='flipHolder'>
				<div className='card'>
					<Circle />
				</div>
				<div className='card' onClick={() => checkSnapFinished()}>
					<svg viewBox="0 0 100 15"/>
					<svg viewBox="0 0 100 18">{snapped[0] ? <text className="dragged" x="32" y="12" fontSize="12" fill="black">&lt;circle</text> : 
					<rect x="32.5" y="0" width="35" height="13" fill="grey"/>}</svg>
					<svg viewBox="0 0 100 18">{snapped[1] ? <text className="dragged" x='30' y='12' fontSize="12" fill="black">r="100"</text> : 
					<rect x='27' y='0' width="45" height="13" fill="grey"/>}</svg>
					<svg viewBox="0 0 100 18">{snapped[2] ? <text className="dragged" x="20" y="12" fontSize="12" fill="black">fill="blue"&gt;</text> : 
					<rect x="17.5" y="0" width="65" height="13" fill="grey"/>}</svg>
					<svg viewBox="0 0 100 18">{snapped[3] ? <text className="dragged" x="29" y="12" fontSize="12" fill="black">&lt;/circle&gt;</text> : 
					<rect x="27.5" y="0" width="45" height="13" fill="grey"/>}</svg>
				</div>
			</div>
			)
	}

const mapStateToProps = (state) => {
	return {snapped: state.snapReducer.snapped}};


export default connect(mapStateToProps)(DragAttrCircle);