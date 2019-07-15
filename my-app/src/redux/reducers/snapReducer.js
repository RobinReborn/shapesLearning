import {SNAP_SET, SNAP_GET} from '../actionTypes';

const initialState = {
	snapped: []
}

function snapReducer(state = initialState, action){
	switch (action.type) {
		case SNAP_SET: {
			const newState = state.slice();
			newState.splice(action.index,0,true)
			return newState
		}
		case SNAP_GET :{
			console.log(state.snapped[action.index])
			return state.snapped[action.index]
		}
		default: {
			return state
		}
	}
}

export default snapReducer;