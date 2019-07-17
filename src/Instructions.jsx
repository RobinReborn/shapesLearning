import React from 'react';
import { connect } from "react-redux";
import { instructionsArray } from './InstructionsArray'
const Instructions = ({instructions}) => {
	console.log(instructions)
	return(<div id='instructions'>{instructionsArray[instructions[0]][instructions[1]]}</div>)
}

const mapStateToProps = (state) => {
	return {instructions: state.instructionsReducer.instructions}
}

export default connect(mapStateToProps)(Instructions)