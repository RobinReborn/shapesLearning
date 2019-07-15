import {INCREMENT_SHAPE , CHANGE_SHAPE, INC_LEVEL, DEC_LEVEL,
 INC_SHAPE, DEC_SHAPE, INCREMENT_INSTRUCTIONS, SNAP_SET, SNAP_GET, GET_SHAPE} from "./actionTypes";

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