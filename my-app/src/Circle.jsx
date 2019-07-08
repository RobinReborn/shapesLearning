import React from 'react';
import Draggable from 'react-draggable';

class Circle extends React.Component{
	constructor(props) {
	    super(props);
	    this.handleDrag = this.handleDrag.bind(this);
	}
	componentDidMount(){
		if(this.props.attr){
			const elements = document.getElementById("dragElements").children
			let positions = []
			let desiredPositions = []
			const offsetWidth = document.getElementsByClassName("objectHolder")[0].offsetWidth
			const flex = 50;
			for (let x=1; x < elements.length; x++){
				let posInfo = elements.item(x).getBoundingClientRect();
				positions.push([posInfo.left,posInfo.top]);
				desiredPositions.push([[posInfo.left+flex-offsetWidth,posInfo.left-flex-offsetWidth],[posInfo.top+flex,posInfo.top-flex]]);
			}
			this.setState({currentPositions: positions, desiredPositions: desiredPositions})
		}
	}
	handleDrag(e,ui) {
		const elementNumber = Number(ui.node.id.substring(10))
    	const [x, y] = this.state.currentPositions[elementNumber];
    	let oldPositions = [...this.state.currentPositions];
    	let oldPosition = {...oldPositions[elementNumber]};
    	oldPosition = [oldPosition[0] + ui.deltaX, oldPosition[1] + ui.deltaY]
    	oldPositions[elementNumber] = oldPosition
    	this.setState({currentPositions : oldPositions})
		if ((x <= this.state.desiredPositions[elementNumber][0][0] &&
			x >= this.state.desiredPositions[elementNumber][0][1]) &&
			(y <= this.state.desiredPositions[elementNumber][1][0] &&
			 y >= this.state.desiredPositions[elementNumber][1][1])) {
				ui.node.style.visibility = "hidden";
				this.props.update(['snapToShape',elementNumber])
				}
		}
	
	
	render() {
			if (this.props.attr){
				return (
					<div className='flipHolder'>
						<div className='card'>
							<svg viewBox="0 0 100 100">
								<circle r="50" cx="50" cy="50" fill="blue"/>
							</svg>
						</div>
						<div className='card' id='dragElements'>
							<svg viewBox="0 0 100 12"/>
							<Draggable onDrag={this.handleDrag}><svg id='Draggable_0'  viewBox="0 0 100 19"><text className='Draggable' x="32" y="12" fontSize="12" fill="black">&lt;circle</text></svg></Draggable>
							<Draggable onDrag={this.handleDrag}><svg id='Draggable_1'  viewBox="0 0 100 19"><text className='Draggable' x='30' y='12' fontSize="12" fill="black">r="100"</text></svg></Draggable>
							<Draggable onDrag={this.handleDrag}><svg id='Draggable_2' viewBox="0 0 100 18"><text className='Draggable' x="20" y="12" fontSize="12" fill="black">fill="blue"&gt;</text></svg></Draggable>
							<Draggable onDrag={this.handleDrag}><svg id='Draggable_3'  viewBox="0 0 100 18"><text className='Draggable' x="29" y="12" fontSize="12" fill="black">&lt;/circle&gt;</text></svg></Draggable>
							<svg viewBox="0 0 100 15"/>
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