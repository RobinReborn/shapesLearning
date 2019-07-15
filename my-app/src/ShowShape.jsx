import {incrementShape} from './redux/actions';
import { connect } from "react-redux";
import React from 'react';
import Layout from './Layout';
import {shapeArray} from './shapeArray';

const mapStateToProps = (state) => {
	 return {shape: shapeArray[state.rootReducer.shape],
	 		level: state.rootReducer.level,
	 		snapped: state.rootReducer.snapped};
}

const mapDispatchToProps = (dispatch) => ({
	update: () => dispatch(incrementShape()),
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
	)(Layout)
