import {INCREMENT_SHAPE, INCREMENT_INSTRUCTIONS, SNAP_SET, SNAP_GET, GET_SHAPE, 
	RESET_SNAP ,CHECK_SNAP_FINISHED, INSTRUCTION_INCREMENT, CHANGE_STATE,ADD_MISPLACED_ELEMENT_ERROR, CLEAR_ERROR,
	SHOW_CONTROL_PANEL_BUTTON,TOGGLE_CONTROL_PANEL,HIDE_CONTROL_PANEL_BUTTON, SHOW_ARROW,
	CHANGE_ANGLE, ADD_USER_INPUT_ERROR} from "./actionTypes";

export const incrementShape = value => ({
	type: INCREMENT_SHAPE,
	value
}) 

export const incrementInstructions = value => ({
	type: INCREMENT_INSTRUCTIONS,
	value
}) 

export const snapSet = index => ({
	type: SNAP_SET,
	index
})

export const snapGet = index => ({
	type: SNAP_GET,
	index
})

export const getShape = () => ({
	type: GET_SHAPE
})

export const checkSnapFinished = () => ({
	type: CHECK_SNAP_FINISHED
})

export const resetSnap = () => ({
	type: RESET_SNAP
})

export const instructionIncrement = () => ({
	type: INSTRUCTION_INCREMENT
})

export const changeState = (level,shape) => ({
	type: CHANGE_STATE,
	level,
	shape
})

export const addMisplacedElementError = (parameter,message) => ({
	type: ADD_MISPLACED_ELEMENT_ERROR,
	parameter,
	message
})

export const addUserInputError = (tokens,desiredTokens) => ({
	type: ADD_USER_INPUT_ERROR,
	tokens,
	desiredTokens
})


export const clearError = (error,element) => ({
	type: CLEAR_ERROR,
	error,
	element
})

export const toggleControlPanel = () => ({
	type: TOGGLE_CONTROL_PANEL
}) 

export const showControlPanelButton = () => ({
	type: SHOW_CONTROL_PANEL_BUTTON
})

export const hideControlPanelButton = () => ({
	type: HIDE_CONTROL_PANEL_BUTTON
})

export const showArrow = (element) => ({
	type: SHOW_ARROW,
	element
})

export const changeAngle = (element,angle) => ({
	type: CHANGE_ANGLE,
	element,
	angle
})

