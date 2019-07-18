import {instructionsArray} from '../InstructionsArray';
import {INSTRUCTION_INCREMENT, ADD_ERROR, CLEAR_ERROR, TOGGLE_CONTROL_PANEL,HIDE_CONTROL_PANEL_BUTTON,
		SHOW_CONTROL_PANEL_BUTTON} from '../actionTypes'

const initialState = {
	instructions: [0,0],
	errors: "",
	showControlState: 'hidden',
	showControlPanelButton: 'hidden'
}

function instructionReducer(state=initialState,action){
	switch(action.type){
		case TOGGLE_CONTROL_PANEL: {
			if (state.showControlState == 'visible'){
			return Object.assign({}, state,{showControlState: 'hidden'})
			}
			else{
				return Object.assign({}, state,{showControlState: 'visible'})
			}
		}
		case HIDE_CONTROL_PANEL_BUTTON: {
			return Object.assign({}, state,{showControlPanelButton: 'hidden'})
		}
		case SHOW_CONTROL_PANEL_BUTTON: {
			return Object.assign({}, state,{showControlPanelButton: 'visible'})
		}
		case INSTRUCTION_INCREMENT: {
			const instructions = state.instructions.slice()
			if (instructions[1] <  instructionsArray[state.instructions[0]].length-1){
				return Object.assign({}, state,{instructions: [instructions[0],instructions[1]+1], errors: ""})
			}
			else {
				return Object.assign({}, state,{instructions: [instructions[0]+1,0], errors: ""})
			}
		}
		case ADD_ERROR: {
			return Object.assign({}, state,{errors: action.parameter + " " + action.message})
    	}
    	case CLEAR_ERROR: {
    		return Object.assign({}, state,{errors: ""})
    	}
		default:{
			return state
		}
	}
}
export default instructionReducer;