import {ADD_MISPLACED_ELEMENT_ERROR,SHOW_ARROW, 
    CHANGE_ANGLE, ADD_USER_INPUT_ERROR, CLEAR_ERROR} from '../actionTypes'

const initialState = {
    errors: {},
    rotates : [0,0,0,0],
    arrowVisible: ['none','none','none','none']

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
function errorReducer(state=initialState,action){
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
            let end = action.desiredTokens.length;
            if (action.desiredTokens.indexOf('>') != -1){
                end = action.desiredTokens.indexOf('>')
            }
    		for (let x =1; x< end; x=x+2){
	    		if (action.tokens.indexOf(action.desiredTokens[x]) == -1){
	    			error[action.desiredTokens[x]] = 'is missing'
	    		}
	    		else if (action.tokens[action.tokens.indexOf(action.desiredTokens[x])+1] != action.desiredTokens[x+1]){
	    			error[action.desiredTokens[x]] = "value is wrong, it should be " + action.desiredTokens[x+1]
	    		}
    		}
            //check for closing tag
            if (action.tokens[end+1] != action.desiredTokens[end+1]){
                error[action.desiredTokens[end+1]] = 'needs to be at the end'
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
export default errorReducer;