import {incrementShape} from './redux/actions';
import { connect } from "react-redux";
import React from 'react';
import Shape from './Shape';
import {shapeArray} from './shapeArray';

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


const mapStateToProps = (state,props) => {
	 return {shape: shapeArray[state.rootReducer.shape]};
}

const mapDispatchToProps = (dispatch,ownProps) => ({
	updateShape: () => dispatch(incrementShape(ownProps.shape+1)),
})

/*let ShowShape = ({ dispatch }) => {
	return (
		<div onClick = {() => dispatch(incrementShape())}><button>test</button></div>
		)
}*/

export default connect(
	mapStateToProps,
	mapDispatchToProps
	)(Shape)
/*ShowShape = connect()(Shape)
export default ShowShape;*/
//export default connect()(ShowShape)