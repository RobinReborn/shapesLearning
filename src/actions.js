import {INCREMENT_SHAPE, INCREMENT_INSTRUCTIONS, SNAP_SET, SNAP_GET, GET_SHAPE, 
	RESET_SNAP ,CHECK_SNAP_FINISHED, INSTRUCTION_INCREMENT, CHANGE_STATE,ADD_ERROR, CLEAR_ERROR} from "./actionTypes";

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

export const clearError = () => ({
	type: CLEAR_ERROR
})