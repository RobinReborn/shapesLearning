import {incrementShape} from './redux/actions';
import { connect } from "react-redux";
import React from 'react';
/*const getShape = shapeId => {
	switch(shapeId){
		case 0: 
			return <Circle/>
		case 1:
			return <Rectangle/>
		case 2:
			return <Triangle/>
		}
	}*/


const mapStateToProps = state => ({
	shape: state.shape
})

const mapDispatchToProps = dispatch => ({
	INCREMENT_SHAPE: () => dispatch(incrementShape)
})

let ShowShape = ({ dispatch }) => {
	return (
		<div onClick = {() => dispatch(incrementShape())}><button>test</button></div>
		)
}


ShowShape = connect()(ShowShape)
export default ShowShape;
//export default connect()(ShowShape)