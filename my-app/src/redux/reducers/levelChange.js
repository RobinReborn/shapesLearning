import {INC_LEVEL, DEC_LEVEL} from "../actionTypes";

const initialState = {
	level: 0
};

function levelChange(state = initialState, action) {
	switch (action.type) {
		case INC_LEVEL: {
			return {...state,
			level: state.level + 1
			}
		}
		case DEC_LEVEL: {
			return {
				...state,
				shape: state.shape - 1
			}
		}
		default: return state;
	}
}

export default levelChange;