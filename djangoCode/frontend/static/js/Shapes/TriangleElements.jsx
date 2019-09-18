import React, {useRef} from 'react';
import Draggable from 'react-draggable';
import {handleDrag,mount,handleStop,getArrowOffset,checkFinished} from './dragHelpers'
import {connect} from "react-redux";
import ArrowHolder from './ArrowHolder';

class TriangleElements extends React.Component{
	constructor(props) {
	    super(props);
		this.handleDrag = handleDrag.bind(this);
	    this.handleStop = handleStop.bind(this);
	    this.state = {currentPositions: [[],[],[],[]], desiredPositions: [], flex: 50, rotate: []}
		this.getArrowOffset = getArrowOffset.bind(this);
	}

	componentDidMount(){
		mount(this);
	}

	render(){
		const arrowHolders = []
		for (let x =0;x < 4;x++){
			arrowHolders.push(<ArrowHolder key = {x} top={this.getArrowOffset(x)[0]} left={this.getArrowOffset(x)[1]} 
						rotates={this.props.rotates[x]} visible={this.props.arrowVisible[x]}/>)
		}

		return(
			<div className='arrowAndElementsHolder'>
			<div ref='dragElements' id='dragElements'>
				<svg viewBox="0 0 100 36"/>
				<Draggable onDrag={this.handleDrag} onStop={this.handleStop}><svg ref='Draggable_0' id='Draggable_0' viewBox="0 0 100 14">
					<text className='Draggable' x="34.5" y="9" fontSize="8" fill="black">&lt;polygon</text></svg></Draggable>
				<Draggable onDrag={this.handleDrag} onStop={this.handleStop}><svg ref='Draggable_1' id='Draggable_1' viewBox="0 0 100 14">
					<text className='Draggable' x="27" y="9" fontSize="8" fill="black">points="0 95,</text></svg></Draggable>
				<Draggable onDrag={this.handleDrag} onStop={this.handleStop}><svg ref='Draggable_2' id='Draggable_2'  viewBox="0 0 100 14">
					<text className='Draggable' x="29" y="8" fontSize="8" fill="black">100 95, 50 9"</text></svg></Draggable>
				<Draggable onDrag={this.handleDrag} onStop={this.handleStop}><svg ref='Draggable_3' id='Draggable_3' viewBox="0 0 100 14">
					<text className='Draggable' x="14" y="8" fontSize="8" fill="black">fill="green" &lt;/polgon&gt;</text></svg></Draggable>
			</div>
			<div  ref='arrowHolder' id='arrowHolder'>
					{arrowHolders}
						</div>
				<svg viewBox="0 0 100 100"/>
			</div>)
	}
}
const mapStateToProps = (state) => {
	return {arrowVisible: state.errorReducer.arrowVisible, rotates: state.errorReducer.rotates}};

export default connect(mapStateToProps)(TriangleElements);