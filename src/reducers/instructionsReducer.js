import {instructionsArray} from '../InstructionsArray';
import {INSTRUCTION_INCREMENT} from '../actionTypes'

const initialState = {
	instructions: [0,0]
}

function instructionReducer(state=initialState,action){
	switch(action.type){
		case INSTRUCTION_INCREMENT: {
			const instructions = state.instructions.slice()
			if (instructions[1] <  instructionsArray[state.instructions[0]].length-1){
				return Object.assign({}, state,{instructions: [instructions[0],instructions[1]+1]})
			}
			else {
				return Object.assign({}, state,{instructions: [instructions[0]+1,0]})
			}
		}
		default:{
			return state
		}
	}
}
export default instructionReducer;