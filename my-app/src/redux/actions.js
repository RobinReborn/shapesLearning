import {INCREMENT_SHAPE, INCREMENT_INSTRUCTIONS, SNAP_SET, SNAP_GET, GET_SHAPE, 
	RESET_SNAP ,CHECK_SNAP_FINISHED} from "./actionTypes";

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