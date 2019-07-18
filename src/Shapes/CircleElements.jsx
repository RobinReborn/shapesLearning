import React from 'react';
import Draggable from 'react-draggable';
import {handleDrag,mount,handleStop} from './dragHelpers.js'
import {connect} from "react-redux";

class CircleElements extends React.Component{
	constructor(props) {
	    super(props);
	    this.handleDrag = handleDrag.bind(this);
	    this.handleStop = handleStop.bind(this);
	}

	componentDidMount(){
		mount(this);
	}

	render() {
		return(
			<div className='card' id='dragElements'>
				<svg viewBox="0 0 100 12"/>
				<Draggable onDrag={this.handleDrag} onStop={this.handleStop}><svg id='Draggable_0'  viewBox="0 0 100 19">
					<text className='Draggable' x="32" y="12" fontSize="12" fill="black">&lt;circle</text></svg></Draggable>
				<Draggable onDrag={this.handleDrag} onStop={this.handleStop}><svg id='Draggable_1'  viewBox="0 0 100 19">
					<text className='Draggable' x='30' y='12' fontSize="12" fill="black">r="100"</text></svg></Draggable>
				<Draggable onDrag={this.handleDrag} onStop={this.handleStop}><svg id='Draggable_2' viewBox="0 0 100 18">
					<text className='Draggable' x="20" y="12" fontSize="12" fill="black">fill="blue"&gt;</text></svg></Draggable>
				<Draggable onDrag={this.handleDrag} onStop={this.handleStop}><svg id='Draggable_3'  viewBox="0 0 100 18">
					<text className='Draggable' x="29" y="12" fontSize="12" fill="black">&lt;/circle&gt;</text></svg></Draggable>
				<svg viewBox="0 0 100 15"/>
			</div>)
	}
}
const mapStateToProps = (state) => {
	return {snapped: state.snapReducer.snapped}};

export default connect(mapStateToProps)(CircleElements);