import {INCREMENT_SHAPE , CHANGE_SHAPE, INC_LEVEL, DEC_LEVEL,
 INC_SHAPE, DEC_SHAPE, INCREMENT_INSTRUCTIONS} from "./actionTypes";

export const incrementShape = value => ({
	type: INCREMENT_SHAPE,
	value
}) 

export const incrementInstructions = value => ({
	type: INCREMENT_INSTRUCTIONS,
	value
}) 