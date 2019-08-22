import {instructionsArray} from '../InstructionsArray';
import {INSTRUCTION_INCREMENT, ADD_MISPLACED_ELEMENT_ERROR, CLEAR_ERROR, TOGGLE_CONTROL_PANEL,HIDE_CONTROL_PANEL_BUTTON,
		SHOW_CONTROL_PANEL_BUTTON, SHOW_ARROW, CHANGE_ANGLE, ADD_USER_INPUT_ERROR} from '../actionTypes'

const initialState = {
	instructions: [0,0],
	errors: {},
	showControlState: 'hidden',
	showControlPanelButton: 'hidden',
	arrowVisible: ['none','none','none','none'],
	rotates : [0,0,0,0]
}
function shallowCopyOfEnumerableOwnProperties( original )  
{
    var clone = {} ;
    var i , keys = Object.keys( original ) ;
    for ( i = 0 ; i < keys.length ; i ++ )
    {
        clone[ keys[ i ] ] = original[ keys[ i ] ] ;
    }
    return clone ;
}

function instructionReducer(state=initialState,action){
	switch(action.type){
		case CHANGE_ANGLE:{
			let rotateArray = state.rotates;
			rotateArray[action.element] = action.angle;
			return Object.assign({}, state, {rotates: rotateArray})
		}
		case SHOW_ARROW: {
			let arrowArray =  state.arrowVisible.slice()
			arrowArray[action.element] = 'block'
			return Object.assign({}, state, {arrowVisible: arrowArray})
		}
		case TOGGLE_CONTROL_PANEL: {
			if (state.showControlState === 'visible'){
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
				return Object.assign({}, state,{instructions: [instructions[0],instructions[1]+1], errors: {}})
			}
			else {
				return Object.assign({}, state,{instructions: [instructions[0]+1,0], errors: {}})
			}
		}
		case ADD_MISPLACED_ELEMENT_ERROR: {
			return {...state, errors: { 
				...state.errors,
           [action.parameter]: action.message} 
    	}}
    	case ADD_USER_INPUT_ERROR: {
    		let error = {}
    		if (action.tokens[0] != action.desiredTokens[0]){
    			error['Shape must begin with'] =  action.desiredTokens[0]
    		}
    		//check attributes
    		for (let x =1; x< action.desiredTokens.length; x=x+2){
	    		if (action.tokens.indexOf(action.desiredTokens[x]) == -1){
	    			error[action.desiredTokens[x]] = 'is missing'
	    		}
	    		else if (action.tokens[action.tokens.indexOf(action.desiredTokens[x])+1] != action.desiredTokens[x+1]){
	    			error[action.desiredTokens[x]] = "value is wrong, it should be " + action.desiredTokens[x+1]
	    		}
    		}
    		return Object.assign({}, state, {errors: error})

    	}
    	case CLEAR_ERROR: {
    		let newState = state
    		let stateErrors = newState.errors
    		delete stateErrors[action.error]
    		let newStateErrors = shallowCopyOfEnumerableOwnProperties(stateErrors)
    		let arrowArray =  state.arrowVisible.slice()
    		arrowArray[action.element] = 'none'
    		return Object.assign({}, state,{errors: newStateErrors, arrowVisible:arrowArray})
    	}
		default:{
			return state
		}
	}
}
export default instructionReducer;