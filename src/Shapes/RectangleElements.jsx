import React from 'react';
import Draggable from 'react-draggable';
import {handleDrag,mount} from './dragHelpers.js'
import {connect} from "react-redux";

class RectangleElements extends React.Component{
	constructor(props) {
	    super(props);
		this.handleDrag = handleDrag.bind(this);
	}

	componentDidMount(){
		mount(this);
	}

	render() {
		return (
			<div id='dragElements'>
				<svg viewBox="0 0 100 17"/>
				<Draggable onDrag={this.handleDrag}><svg id='Draggable_0' viewBox="0 0 100 17"><text className='Draggable' x="6" y="12" fontSize="12" fill="black">&lt;rect width="100"</text></svg></Draggable>
				<Draggable onDrag={this.handleDrag}><svg id='Draggable_1' viewBox="0 0 100 17"><text className='Draggable' x="21" y="12" fontSize="12" fill="black">height="70"</text></svg></Draggable>
				<Draggable onDrag={this.handleDrag}><svg id='Draggable_2'  viewBox="0 0 100 17"><text className='Draggable' x="25" y="12" fontSize="12" fill="black">fill="red"&gt;</text></svg></Draggable>
				<Draggable onDrag={this.handleDrag}><svg id='Draggable_3'  viewBox="0 0 100 17"><text className='Draggable' x="33" y="12" fontSize="12" fill="black">&lt;/rect&gt;</text></svg></Draggable>
			</div>)
	}
}

export default connect()(RectangleElements);