import React from 'react';
import { connect } from "react-redux";
import { instructionsArray } from './InstructionsArray'
import {changeState , toggleControlPanel, showControlPanelButton, hideControlPanelButton} from './actions';

function showErrors(errors){
	let errorOutput = ""
	Object.keys(errors).forEach(function(key) {
		errorOutput += key + " " + errors[key] + " ";
});
	return errorOutput
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
 
const Instructions = ({instructions, errors, level, shape, showControlState, controlPanelButton, dispatch}) => {
	return(
			<div id='instructions'>{instructionsArray[instructions[0]][instructions[1]]}
				<div id='error'>{showErrors(errors)}</div>
					<div id='controlPanelHolder'>
						<br/>
						<div id='controlPanel' style={{visibility : showControlState}}>
							<label>level {level + "     "}</label>
							<label>shape {shape}</label>
							<form onSubmit={(e) => stateShift(e,dispatch)}>
								<label>level</label><input type='number' onClick={e => stopPropagation(e)}/>
								<label>shape</label><input type='number' onClick={e => stopPropagation(e)}/>
								<input type='submit'  readOnly value='Go' onClick={e => stopPropagation(e)}/>
							</form>
						</div>
						<br/>
						<div id='controlPanelShow' onMouseOver={() => dispatch(showControlPanelButton()) } onMouseLeave={() => dispatch(hideControlPanelButton())}>
							<button style={{visibility : controlPanelButton}} onClick={() => dispatch(toggleControlPanel()) }>Control Panel</button>
						</div>
					</div>
			</div>
			)
}

const mapStateToProps = state => {
	return {instructions: state.instructionsReducer.instructions,
			 errors: state.errorReducer.errors,
			 level: state.rootReducer.level,
			 shape: state.rootReducer.shape,
			 showControlState: state.instructionsReducer.showControlState,
			 controlPanelButton: state.instructionsReducer.showControlPanelButton}
}

export default connect(mapStateToProps)(Instructions)