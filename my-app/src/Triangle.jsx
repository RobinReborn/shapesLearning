import React from 'react';
import Draggable from 'react-draggable';
import {handleDrag,mount} from './dragHelpers.js'
import {connect} from "react-redux";
import {snapSet} from './redux/actions';

class Triangle extends React.Component{
	constructor(props) {
	    super(props);
		this.handleDrag = handleDrag.bind(this);
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
							<polygon points="0 100, 100 100, 50,14" fill="green"/>
						</svg>
					</div>
					<div className='card' id='dragElements'>
						<svg viewBox="0 0 100 41"/>
						<Draggable onDrag={this.handleDrag}><svg id='Draggable_0' viewBox="0 0 100 14"><text className='Draggable' x="34.5" y="9" fontSize="8" fill="black">&lt;polygon</text></svg></Draggable>
						<Draggable onDrag={this.handleDrag}><svg id='Draggable_1' viewBox="0 0 100 14"><text className='Draggable' x="27" y="9" fontSize="8" fill="black">points="10 80,</text></svg></Draggable>
						<Draggable onDrag={this.handleDrag}><svg id='Draggable_2'  viewBox="0 0 100 14"><text className='Draggable' x="29" y="8" fontSize="8" fill="black">90 80, 50 30"</text></svg></Draggable>
						<Draggable onDrag={this.handleDrag}><svg id='Draggable_3'  viewBox="0 0 100 14"><text className='Draggable' x="14" y="8" fontSize="8" fill="black">fill="green" &lt;/polgon&gt;</text></svg></Draggable>
					</div>
				</div>)
			}
		else{
			return (			
			<svg viewBox="0 0 100 100">
				<polygon points="0 100, 100 100, 50,14" fill="green"/>
			</svg>
			)
		}
	}
}

export default connect()(Triangle);