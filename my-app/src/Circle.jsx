import React from 'react';
import Draggable from 'react-draggable';

class Circle extends React.Component{

	render() {
			if (this.props.attr){
				return (
					<div className='flipHolder'>
						<div className='card'>
							<svg viewBox="0 0 100 100">
								<circle r="50" cx="50" cy="50" fill="blue"/>
							</svg>
						</div>
						<div className='card'>
							<svg viewBox="0 0 100 15"/>
							<Draggable><svg viewBox="0 0 100 18"><text x="32" y="10" fontSize="12" fill="black">&lt;circle</text></svg></Draggable>
							<Draggable><svg viewBox="0 0 100 18"><text x='33' y='10' fontSize="12" fill="black">r="100"</text></svg></Draggable>
							<Draggable><svg viewBox="0 0 100 18"><text x="26" y="10" fontSize="12" fill="black">fill="blue"&gt;</text></svg></Draggable>
							<Draggable><svg viewBox="0 0 100 18"><text x="29" y="10" fontSize="12" fill="black">&lt;/circle&gt;</text></svg></Draggable>
						</div>
					</div>)
			}
			else{
			return(			
				<svg viewBox="0 0 100 100">
					<circle r="50" cx="50" cy="50" fill="blue"/>
				</svg>
			)
		}
	}
}

export default Circle;