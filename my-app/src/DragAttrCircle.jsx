import React from 'react';
import Circle from './Circle';

class DragAttrCircle extends React.Component {
	render() {
		return(
			<div className='flipHolder'>
				<div className='card'>
					<Circle />
				</div>
				<div className='card'>
					<svg viewBox="0 0 100 15"/>
					<svg viewBox="0 0 100 18">{this.props.snapped[0] ? <text x="32" y="10" fontSize="12" fill="black">&lt;circle</text> : <rect x="32.5" y="0" width="35" height="13" fill="grey"/>}</svg>
					<svg viewBox="0 0 100 18">{this.props.snapped[1] ? <text x='33' y='10' fontSize="12" fill="black">r="100"</text> : <rect x='27.5' y='0' width="45" height="13" fill="grey"/>}</svg>
					<svg viewBox="0 0 100 18">{this.props.snapped[2] ? <text x="26" y="10" fontSize="12" fill="black">fill="blue"&gt;</text> : <rect x="20" y="0" width="65" height="13" fill="grey"/>}</svg>
					<svg viewBox="0 0 100 18">{this.props.snapped[3] ? <text x="29" y="10" fontSize="12" fill="black">&lt;/circle&gt;</text> : <rect x="27.5" y="0" width="45" height="13" fill="grey"/>}</svg>
				</div>
			</div>
			)
	}
}
export default DragAttrCircle;