import {incrementShape} from './actions';
import { connect } from "react-redux";
import Layout from './Layout';
import {shapeArray} from './shapeArray';

const mapStateToProps = (state) => {
	 return {shape: shapeArray[state.rootReducer.shape],
	 		level: state.rootReducer.level,
	 		};
}

function mapDispatchToProps(dispatch) {
	return {
		update: () => dispatch(incrementShape())
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
	)(Layout)
