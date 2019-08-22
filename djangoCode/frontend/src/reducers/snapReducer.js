import {SNAP_SET, SNAP_GET, RESET_SNAP} from '../actionTypes';

const initialState = {
	snapped: []
}

function snapReducer(state = initialState, action){
	switch (action.type) {
		case RESET_SNAP: {
			return Object.assign({}, state,{snapped: []})
		}
		case SNAP_SET: {
			const newState = state.snapped.slice();
			newState[action.index] = true
			return Object.assign({}, state,{snapped: newState})
		}
		case SNAP_GET :{
			if (state.snapped[action.index]){
				return true
			}
			else {
				return false
			}
		}
		default: {
			return state
		}
	}
}

export default snapReducer;