import {instructionsArray} from '../InstructionsArray';
import {INSTRUCTION_INCREMENT, ADD_ERROR, CLEAR_ERROR} from '../actionTypes'

const initialState = {
	instructions: [0,0],
	errors: ""
}

function instructionReducer(state=initialState,action){
	switch(action.type){
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