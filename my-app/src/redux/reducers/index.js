import { combineReducers } from "redux";
import shapeChange from "./shapeChange";
import shapeModify from "./shapeModify";
import levelChange from "./levelChange";
import {INCREMENT_SHAPE , CHANGE_SHAPE, INC_LEVEL, DEC_LEVEL, INC_SHAPE, DEC_SHAPE, INCREMENT_INSTRUCTIONS, GET_SHAPE} from "../actionTypes";
import {shapeArray} from "../../shapeArray";
import snapReducer from "./snapReducer";

const initialState = {
  shape: 0,
  level: 0,
};

function rootReducer(state = initialState, action) {
	switch (action.type) {
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
      		return Object.assign({}, state,{shape: 0, level: state.level + 1})
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


export default combineReducers({rootReducer, snapReducer});
