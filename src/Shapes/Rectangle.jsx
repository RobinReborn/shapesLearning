import React from 'react';
import Draggable from 'react-draggable';
import {handleDrag,mount} from './dragHelpers.js'
import {connect} from "react-redux";

class Rectangle extends React.Component{
	constructor(props) {
	    super(props);
		this.handleDrag = handleDrag.bind(this);
		this.state = {placed: [], toPlace: 4}

	}
	componentDidMount(){
		if(this.props.attr){
			mount(this);
		}
	}

	render() {
		if (this.props.attr){
			return (
				<div className='flipHolder'>
					<div className='card'>
						<svg viewBox="0 0 100 100">
							<rect width= "100" height="70" y="25" fill="red"/>
						</svg>
					</div>
					<div className='card' id='dragElements'>
						<svg viewBox="0 0 100 25"/>
						<Draggable onDrag={this.handleDrag}><svg id='Draggable_0' viewBox="0 0 100 17"><text className='Draggable' x="6" y="12" fontSize="12" fill="black">&lt;rect width="100"</text></svg></Draggable>
						<Draggable onDrag={this.handleDrag}><svg id='Draggable_1' viewBox="0 0 100 17"><text className='Draggable' x="21" y="12" fontSize="12" fill="black">height="70"</text></svg></Draggable>
						<Draggable onDrag={this.handleDrag}><svg id='Draggable_2'  viewBox="0 0 100 17"><text className='Draggable' x="25" y="12" fontSize="12" fill="black">fill="red"&gt;</text></svg></Draggable>
						<Draggable onDrag={this.handleDrag}><svg id='Draggable_3'  viewBox="0 0 100 17"><text className='Draggable' x="33" y="12" fontSize="12" fill="black">&lt;/rect&gt;</text></svg></Draggable>
					</div>
				</div>)
			}
		else{
			return(
			<svg viewBox="0 0 100 100">
				<rect width= "100" height="70" y="25" fill="red"/>
			</svg>)
		}
	}
}

export default connect()(Rectangle);