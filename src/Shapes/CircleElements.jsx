import React from 'react';
import Draggable from 'react-draggable';
import {handleDrag,mount,handleStop,getArrowOffset,checkFinished} from './dragHelpers'
import {connect} from "react-redux";
import ArrowHolder from './ArrowHolder';

class CircleElements extends React.Component{
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

	render() {
		const arrowHolders = []
		for (let x =0;x < 4;x++){
			arrowHolders.push(<ArrowHolder key = {x} id={'arrow' + String(x)} top={this.getArrowOffset(x)[0]} left={this.getArrowOffset(x)[1]} 
						rotates={this.props.rotates[x]} visible={this.props.arrowVisible[x]}/>)
		}
		return(
			<div className='arrowAndElementsHolder'>
				<div id='dragElements'>
					<svg viewBox="0 0 100 15"/>
					<Draggable onDrag={this.handleDrag} onStop={this.handleStop}><svg id='Draggable_0'  viewBox="0 0 100 19">
						<text className='Draggable' x="32" y="12" fontSize="12" fill="black">&lt;circle</text></svg></Draggable>
					<Draggable onDrag={this.handleDrag} onStop={this.handleStop}><svg id='Draggable_1'  viewBox="0 0 100 19">
						<text className='Draggable' x='30' y='12' fontSize="12" fill="black">r="100"</text></svg></Draggable>
					<Draggable onDrag={this.handleDrag} onStop={this.handleStop}><svg id='Draggable_2' viewBox="0 0 100 18">
						<text className='Draggable' x="20" y="12" fontSize="12" fill="black">fill="blue"&gt;</text></svg></Draggable>
					<Draggable onDrag={this.handleDrag} onStop={this.handleStop}><svg id='Draggable_3'  viewBox="0 0 100 18">
						<text className='Draggable' x="29" y="12" fontSize="12" fill="black">&lt;/circle&gt;</text></svg></Draggable>
				</div>
				<div  id='arrowHolder'>
					{arrowHolders}
						</div>
				<svg viewBox="0 0 100 100"/>
	

			</div>)
	}
}
const mapStateToProps = (state) => {
	return {arrowVisible: state.instructionsReducer.arrowVisible, rotates: state.instructionsReducer.rotates}};

export default connect(mapStateToProps)(CircleElements);