import { combineReducers } from "redux";
import {INCREMENT_SHAPE, INC_LEVEL, INCREMENT_INSTRUCTIONS, GET_SHAPE, CHANGE_STATE} from "../actionTypes";
import {shapeArray} from "../shapeArray";
import snapReducer from "./snapReducer";
import instructionsReducer from "./instructionsReducer"

const initialState = {
  shape: 0,
  level: 0,
  attr: false,
  snapped: []
};

function rootReducer(state = initialState, action) {
	switch (action.type) {
    case CHANGE_STATE: {
      return Object.assign({}, state, {shape : action.shape, level : action.level})
    }
		case INCREMENT_SHAPE: {
			if (state.shape < shapeArray.length-1){ 
				  return Object.assign({}, state, {shape: state.shape + 1 })
      	}
      	else {
      		rootReducer(state,INC_LEVEL)
      	}
      }
  	case INC_LEVEL: {
  		//something to check for max level
  		if (state.level == 0){
  			return Object.assign({}, state,{shape: 0, level: state.level + 1, attr: true, snapped: []})
  		}
  		else {
  			return Object.assign({}, state,{shape: 0, level: state.level + 1})
  		}
  		break;
  	}
		case GET_SHAPE: {
			console.log(state.shape)
			return state.shape
		}
		case INCREMENT_INSTRUCTIONS: {
			return {
				instructions: action.value
			}
		}
		default: return state;
	}
};


export default combineReducers({rootReducer, snapReducer, instructionsReducer});
