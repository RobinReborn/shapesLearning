import {INCREMENT_SHAPE, INCREMENT_INSTRUCTIONS, SNAP_SET, SNAP_GET, GET_SHAPE, 
	RESET_SNAP ,CHECK_SNAP_FINISHED, INSTRUCTION_INCREMENT, CHANGE_STATE,ADD_ERROR, CLEAR_ERROR,
	SHOW_CONTROL_PANEL_BUTTON,TOGGLE_CONTROL_PANEL,HIDE_CONTROL_PANEL_BUTTON} from "./actionTypes";

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

export const addError = (parameter,message) => ({
	type: ADD_ERROR,
	parameter,
	message
})

export const clearError = (error) => ({
	type: CLEAR_ERROR,
	error
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
