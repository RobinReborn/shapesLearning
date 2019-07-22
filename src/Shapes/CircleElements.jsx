import React from 'react';
import Draggable from 'react-draggable';
import {handleDrag,mount,handleStop,getArrowOffset} from './dragHelpers.js'
import {connect} from "react-redux";

class CircleElements extends React.Component{
	constructor(props) {
	    super(props);
	    this.handleDrag = handleDrag.bind(this);
	    this.handleStop = handleStop.bind(this);
	    this.state = {currentPositions: [[],[],[],[],[]], desiredPositions: [], flex: 50, rotate: []}
		this.getArrowOffset = getArrowOffset.bind(this);
	}
	componentDidMount(){
		mount(this);
	}

	render() {
		return(
			<div style={{position: "relative"}}>
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
				<div  className='arrowHolder'>
					<svg viewBox="0 0 100 60" className='arrows' style={{ top: this.getArrowOffset(0)[0], 
																			left: this.getArrowOffset(0)[1]}}>
					<g transform={"rotate(" + this.props.rotates[0] + ", 50, 30)"}>
						<line x1='30' y1='30' x2='0' y2='30'
						style={{strokeWidth:1, stroke:'red', display: this.props.arrowVisible[0]}}/>
						<line x1='0' y1='30' x2='8' y2='26' style={{strokeWidth:1, stroke:'red',display: this.props.arrowVisible[0]}}/>
						<line x1='0' y1='30' x2='8' y2='34' style={{strokeWidth:1, stroke:'red', display: this.props.arrowVisible[0]}}/></g>
						</svg>
						<svg viewBox="0 0 100 60" className='arrows' style={{ top: this.getArrowOffset(1)[0], 
																			left: this.getArrowOffset(1)[1]}}>

					<g transform={"rotate(" + this.props.rotates[1] + ", 50, 30)"}>
						<line x1='30' y1='30' x2='0' y2='30'
						style={{strokeWidth:1, stroke:'red', display: this.props.arrowVisible[1]}}/>
						<line x1='0' y1='30' x2='8' y2='26' style={{strokeWidth:1, stroke:'red',display: this.props.arrowVisible[1]}}/>
						<line x1='0' y1='30' x2='8' y2='34' style={{strokeWidth:1, stroke:'red', display: this.props.arrowVisible[1]}}/></g>
						</svg>

					<svg viewBox="0 0 100 60" className='arrows' style={{ top: this.getArrowOffset(2)[0], 
																			left: this.getArrowOffset(2)[1]}}>
					<g transform={"rotate(" + this.props.rotates[2] + ", 50, 30)"}>
						<line x1='30' y1='30' x2='0' y2='30'
						style={{strokeWidth:1, stroke:'red', display: this.props.arrowVisible[2]}}/>
						<line x1='0' y1='30' x2='8' y2='26' style={{strokeWidth:1, stroke:'red',display: this.props.arrowVisible[2]}}/>
						<line x1='0' y1='30' x2='8' y2='34' style={{strokeWidth:1, stroke:'red', display: this.props.arrowVisible[2]}}/></g>
						</svg>
						<svg viewBox="0 0 100 60" className='arrows' style={{ top: this.getArrowOffset(3)[0], 
																			left: this.getArrowOffset(3)[1]}}>
					<g transform={"rotate(" + this.props.rotates[3] + ", 50, 30)"}>
						<line x1='30' y1='30' x2='0' y2='30'
						style={{strokeWidth:1, stroke:'red', display: this.props.arrowVisible[3]}}/>
						<line x1='0' y1='30' x2='8' y2='26' style={{strokeWidth:1, stroke:'red',display: this.props.arrowVisible[3]}}/>
						<line x1='0' y1='30' x2='8' y2='34' style={{strokeWidth:1, stroke:'red', display: this.props.arrowVisible[3]}}/></g>
						</svg>

						</div>

			</div>)
	}
}
const mapStateToProps = (state) => {
	return {arrowVisible: state.instructionsReducer.arrowVisible, rotates: state.instructionsReducer.rotates}};

export default connect(mapStateToProps)(CircleElements);