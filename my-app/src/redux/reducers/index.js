import { combineReducers } from "redux";
import shapeChange from "./shapeChange";
import shapeModify from "./shapeModify";
import levelChange from "./levelChange";
import {INCREMENT_SHAPE , CHANGE_SHAPE, INC_LEVEL, DEC_LEVEL, INC_SHAPE, DEC_SHAPE} from "../actionTypes";

const initialState = {
  shape: 0
};
function rootReducer(state = initialState, action) {
	switch (action.type) {
		case INCREMENT_SHAPE: {
			return Object.assign({}, state, {
        		shape: state.shape + 1
      		})
		
		}
		case CHANGE_SHAPE: {
			const { shapeId } = action.payload
			return {
				...state,
				shape: shapeId
			}
		}
		default: return state;
	}
};


export default rootReducer;
