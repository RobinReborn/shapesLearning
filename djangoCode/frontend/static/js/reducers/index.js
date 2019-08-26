import { combineReducers } from "redux";
import {INCREMENT_SHAPE, INC_LEVEL, CHANGE_STATE} from "../actionTypes";
import {shapeArray} from "../shapeArray";
import snapReducer from "./snapReducer";
import instructionsReducer from "./instructionsReducer"
import errorReducer from './errorReducer';

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
  	}
		default: return state;
	}
};


export default combineReducers({rootReducer, snapReducer, instructionsReducer, errorReducer});
