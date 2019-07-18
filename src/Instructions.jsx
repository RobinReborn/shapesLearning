import React from 'react';
import { connect } from "react-redux";
import { instructionsArray } from './InstructionsArray'
import {changeState} from './actions';

function onClick(){

}

const stateShift = (e,dispatch) => {
	e.preventDefault();
	let level = e.target[0]['value']
	let shape = e.target[1]['value']
	dispatch(changeState(parseInt(level),parseInt(shape)))
}
function stopPropagation(e) {
	e.stopPropagation();
}
  	
const Instructions = ({instructions, errors, level, shape, dispatch}) => {
	return( <div>
				<div id='instructions'>{instructionsArray[instructions[0]][instructions[1]]}</div>
				<div id='error'>{errors}</div>
				<label>level {level}</label>
					<label>  shape {shape}</label>
				<button onClick={onClick()}>Select Task</button>
				<form onSubmit={(e) => stateShift(e,dispatch)}>
					<label>level</label><input type='number' name='level' onClick={e => stopPropagation(e)}/>
					<label>shape</label><input type='number' onClick={e => stopPropagation(e)}/>
					<input type='submit'  readOnly value='Go' onClick={e => stopPropagation(e)}/>
					
				</form>
			</div>)
}

const mapStateToProps = state => {
	return {instructions: state.instructionsReducer.instructions,
			 errors: state.instructionsReducer.errors,
			 level: state.rootReducer.level,
			 shape: state.rootReducer.shape}
}

export default connect(mapStateToProps)(Instructions)