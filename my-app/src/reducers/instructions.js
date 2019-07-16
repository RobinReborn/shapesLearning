import InstructionsArray from '../InstructionsArray';

const initialState = {
	instructions: [0][0]
}

function instructionReducer(state=initialState,action){
	switch(action.type){
		case INCREMENT_INSTRUCTION: {
			const instructions = state.instructions.slice()
			return Object.assign({}, state,{instructions: newState})
		}
	}
}
