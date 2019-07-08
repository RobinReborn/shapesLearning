import React from 'react';
import Circle from './Circle';

class DragAttrCircle extends React.Component {
	constructor(props) {
	    super(props);
	    this.checkFinished = this.checkFinished.bind(this);
	}
	checkFinished() {
		let check = true;
		if (this.props.snapped != []){
			for (let x=0;x<3;x++){
				if (!this.props.snapped[x]){
					check = false;
				}
			}
			if (check){
				this.props.update(["updateShape"]);
			}
		}
	}
	render() {
		return(
			<div className='flipHolder'>
				<div className='card'>
					<Circle />
				</div>
				<div className='card' onClick={this.checkFinished}>
					<svg viewBox="0 0 100 15"/>
					<svg viewBox="0 0 100 18">{this.props.snapped[0] ? <text className="dragged" x="32" y="12" fontSize="12" fill="black">&lt;circle</text> : 
					<rect x="32.5" y="0" width="35" height="13" fill="grey"/>}</svg>
					<svg viewBox="0 0 100 18">{this.props.snapped[1] ? <text className="dragged" x='30' y='12' fontSize="12" fill="black">r="100"</text> : 
					<rect x='27' y='0' width="45" height="13" fill="grey"/>}</svg>
					<svg viewBox="0 0 100 18">{this.props.snapped[2] ? <text className="dragged" x="20" y="12" fontSize="12" fill="black">fill="blue"&gt;</text> : 
					<rect x="17.5" y="0" width="65" height="13" fill="grey"/>}</svg>
					<svg viewBox="0 0 100 18">{this.props.snapped[3] ? <text className="dragged" x="29" y="12" fontSize="12" fill="black">&lt;/circle&gt;</text> : 
					<rect x="27.5" y="0" width="45" height="13" fill="grey"/>}</svg>
				</div>
			</div>
			)
	}
}
export default DragAttrCircle;