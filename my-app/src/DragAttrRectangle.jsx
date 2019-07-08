import React from 'react';
import Rectangle from './Rectangle';

class DragAttrRectangle extends React.Component {
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
					<Rectangle />
				</div>
				<div className='card' onClick={this.checkFinished}>
					<svg viewBox="0 0 100 24"/>
					<svg viewBox="0 0 100 17">{this.props.snapped[0] ? <text className="dragged" x="6" y="12" fontSize="12" fill="black">&lt;rect width="100"</text> : 
					<rect x="7" y="8" width="85" height="25" fill="grey"/>}</svg>
		   			<svg viewBox="0 0 100 17">{this.props.snapped[1] ? <text className="dragged" x="21" y="12" fontSize="12" fill="black">height="70"</text> : 
		   			<rect x="27" y="5" width="50" height="13" fill="grey"/>}</svg>
		  			<svg viewBox="0 0 100 17">{this.props.snapped[2] ? <text className="dragged" x="25" y="12" fontSize="12" fill="black">fill="red"&gt;</text> : 
		  			<rect x="29.5" y="5" width="45" height="13" fill="grey"/>}</svg>
					<svg viewBox="0 0 100 17">{this.props.snapped[3] ? <text className="dragged" x="33" y="12" fontSize="12" fill="black">&lt;/rect&gt;</text> : 
					<rect x="37.5" y="5" width="30" height="13" fill="grey"/>}</svg>
				</div>
			</div>
			)
	}
}
export default DragAttrRectangle;