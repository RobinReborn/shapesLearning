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
					<svg viewBox="0 0 100 18"><rect x="32.5" y="0" width="35" height="13" fill="grey"/></svg>
					<svg viewBox="0 0 100 18"><rect x='27.5' y='0' width="45" height="13" fill="grey"/></svg>
					<svg viewBox="0 0 100 18"><rect x="20" y="0" width="65" height="13" fill="grey"/></svg>
					<svg viewBox="0 0 100 18"><rect x="27.5" y="0" width="45" height="13" fill="grey"/></svg>
				</div>
			</div>
			)
	}
}
export default DragAttrCircle;