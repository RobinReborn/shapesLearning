import { createLogger } from 'redux-logger'
import Cookies from 'js-cookie'
import {SNAP_SET, SNAP_GET, RESET_SNAP} from './actionTypes';
import {INSTRUCTION_INCREMENT, ADD_MISPLACED_ELEMENT_ERROR, CLEAR_ERROR, TOGGLE_CONTROL_PANEL,HIDE_CONTROL_PANEL_BUTTON,
		SHOW_CONTROL_PANEL_BUTTON, SHOW_ARROW, CHANGE_ANGLE, ADD_USER_INPUT_ERROR} from './actionTypes'

function postLog(state, action){
	const Http = new XMLHttpRequest();
	const url='/logging';
	const header =  "X-CSRFToken";
    const token = Cookies.get('csrftoken');
    console.log(action) 
	Http.open("POST", url, true);
	Http.setRequestHeader(header, token);
	var formData = new FormData();
	formData.append('state', state)
	formData.append('action', action)
	formData.append('stateSubset', stateSubset(state, action))
	Http.send(formData)
	return true
}

function stateSubset(state, action){
	const instructionActions = [INSTRUCTION_INCREMENT, ADD_MISPLACED_ELEMENT_ERROR, CLEAR_ERROR, TOGGLE_CONTROL_PANEL,HIDE_CONTROL_PANEL_BUTTON,
		SHOW_CONTROL_PANEL_BUTTON, SHOW_ARROW, CHANGE_ANGLE, ADD_USER_INPUT_ERROR]
	const snapActions = [SNAP_SET, SNAP_GET, RESET_SNAP]
	if (instructionActions.includes(action['type'])) {
		return state['instructionsReducer']
	}
	else if (snapActions.includes(action['type'])) {
		return state['snapReducer']
	}
	else {
		return state['rootReducer']
	}
}
const logger = createLogger({
	predicate: (getState, action) => postLog(getState(), action)
})

export default logger;