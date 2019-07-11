import {INC_SHAPE,DEC_SHAPE} from "../actionTypes";

const initialState = {
	shapeType : 0
};

export default function(state = initialState, action) {
	switch (action.type) {
		case INC_SHAPE: {
			return {...state,
			shape: state.shapeType + 1
			}
		}
		case DEC_SHAPE: {
			return {
				...state,
				shape: state.shapeType - 1
			}
		}
		default: return state;
	}
}