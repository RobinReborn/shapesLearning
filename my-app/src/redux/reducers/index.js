import { combineReducers } from "redux";
import shapeChange from "./shapeChange";
import shapeModify from "./shapeModify";
import levelChange from "./levelChange";
import {INCREMENT_SHAPE , CHANGE_SHAPE, INC_LEVEL, DEC_LEVEL, INC_SHAPE, DEC_SHAPE, INCREMENT_INSTRUCTIONS} from "../actionTypes";

const initialState = {
  shape: 0
};
function rootReducer(state = initialState, action) {
	switch (action.type) {
		case INCREMENT_SHAPE: 
			console.log(action.value)
			return {shape: action.value }
      		
		
		
		case INCREMENT_INSTRUCTIONS: {
			return {
				instructions: action.value
			}
		}
		default: return state;
	}
};


export default combineReducers({rootReducer});
