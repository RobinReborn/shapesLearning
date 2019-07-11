import {INCREMENT_SHAPE, CHANGE_SHAPE} from "../actionTypes";

const initialState = {
	shape: 0
};

function shapeChange(state = initialState, action) {
	switch (action.type) {
		case INCREMENT_SHAPE: {
			return {...state,
				shape: state.shape + 1
			}
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
}

export default shapeChange;