import React from 'react';
import Triangle from './Triangle';

class DragAttrRectangle extends React.Component {
	constructor(props) {
	    super(props);
	    this.checkFinished = this.checkFinished.bind(this);
	}
	checkFinished() {
		let check = true;
		if (this.props.snapped !== []){
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
					<Triangle />
				</div>
				<div className='card' onClick={this.checkFinished}>
					<svg viewBox="0 0 100 42"/>
					<svg viewBox="0 0 100 14">{this.props.snapped[0] ? <text className="dragged" x="34.5" y="10" fontSize="8" fill="black">&lt;polygon</text> : 
					<rect x="34" y="0" width="32" height="10" fill="grey"/>}</svg>
		   			<svg viewBox="0 0 100 14">{this.props.snapped[1] ? <text className="dragged" x="27" y="10" fontSize="8" fill="black">points="10 80,</text> : 
		   			<rect x="27.5" y="0" width="45" height="10" fill="grey"/>}</svg>
		  			<svg viewBox="0 0 100 14">{this.props.snapped[2] ? <text className="dragged" x="29" y="10" fontSize="8" fill="black">90 80, 50 30"</text> : 
		  			<rect x="29.5" y="0" width="42" height="10" fill="grey"/>}</svg>
					<svg viewBox="0 0 100 14">{this.props.snapped[3] ? <text className="dragged" x="15" y="10" fontSize="8" fill="black">fill="green" &lt;/polgon&gt;</text> : 
					<rect x="25" y="0" width="50" height="10" fill="grey"/>}</svg>
				</div>
			</div>
			)
	}
}
export default DragAttrRectangle;