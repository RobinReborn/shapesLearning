import React from 'react';

class ElementMover extends React.Component {
	constructor(props) {
	    	super(props);
	    	this.state = {mouseDown: false, offset: [0,0]}
	    	this.mouseDown = this.mouseDown.bind(this);
	    	this.mouseUp = this.mouseUp.bind(this);
	    	this.mouseMove = this.mouseMove.bind(this);
		}

	mouseDown = e => {
		this.setState({
			mouseDown: true,
			offset: [e.currentTarget.offsetLeft - e.clientX, e.currentTarget.offsetTop - e.clientY]
		})
	}
	mouseUp() {
		this.setState({
			mouseDown: false
		})
	}
	mouseMove = e => {
		//console.log(this.state.offset[0])
		//console.log(e.clientX)
		e.preventDefault();
		if (this.state.mouseDown) {
			let mousePosition = {x: e.clientX,y: e.clientY}
			e.currentTarget.style.left = (mousePosition.x + this.state.offset[0]) + 'px';
        	e.currentTarget.style.top  = (mousePosition.y + this.state.offset[1]) + 'px';
        	console.log(e.currentTarget.style.top)
		}
	}

	render() {
		
		return (
			<div id='move' onMouseDown={this.mouseDown} onMouseUp={this.mouseUp} onMouseMove={this.mouseMove}>

			</div>
		)
	}
}
export default ElementMover;