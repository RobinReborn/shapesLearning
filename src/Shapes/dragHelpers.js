import {snapSet, instructionIncrement, addError, showArrow , clearError, changeAngle} from '../actions';

export function handleDrag(e,ui) {
	const { dispatch } = this.props;
	const elementNumber = Number(ui.node.id.substring(10))
	const [x, y] = this.state.currentPositions[elementNumber];
	let oldPositions = [...this.state.currentPositions];
	let oldPosition = {...oldPositions[elementNumber]};
	oldPosition = [oldPosition[0] + ui.deltaX, oldPosition[1] + ui.deltaY]
	oldPositions[elementNumber] = oldPosition
	this.setState({currentPositions : oldPositions})
	let angle = Math.atan2((y-(this.state.desiredPositions[elementNumber][1][0]-this.state.flex)),
				(x-(this.state.desiredPositions[elementNumber][0][0]-this.state.flex))) * 180/Math.PI
	let angles = this.state.rotate;
	angles[elementNumber] = angle
	this.setState({ rotate : angles})
	dispatch(changeAngle(elementNumber,angle))
}

export function checkFinished(){
	let check = true;
	for (let x=0;x< document.getElementsByClassName('react-draggable').length; x++){
		if (document.getElementsByClassName('react-draggable')[x].style.visibility !== 'hidden'){
			check = false
		}
	}
	return check
}

export function handleStop(e,ui){
	const elementNumber = Number(ui.node.id.substring(10))
	const [x, y] = this.state.currentPositions[elementNumber];
	const { dispatch } = this.props;
	if ((x <= this.state.desiredPositions[elementNumber][0][0] &&
		x >= this.state.desiredPositions[elementNumber][0][1]) &&
		(y <= this.state.desiredPositions[elementNumber][1][0] &&
		 y >= this.state.desiredPositions[elementNumber][1][1])) {
		ui.node.style.visibility = "hidden";
		dispatch(snapSet(elementNumber))
		dispatch(clearError(ui.node.children[0].textContent,elementNumber))
		if(checkFinished()){
			dispatch(instructionIncrement())
		}		
	}
	else {
		dispatch(addError(ui.node.children[0].textContent,"element misplaced"))
		dispatch(showArrow(elementNumber))		
	}
}

export function getArrowOffset(number){
	if (document.getElementsByClassName("Draggable")[number] && document.getElementsByClassName('arrows')[0]){
		let rect = document.getElementsByClassName("Draggable")[number].getBoundingClientRect()
		let holder = document.getElementsByClassName("objectHolder")[1].getBoundingClientRect()
		let arrow = document.getElementsByClassName('arrows')[0].getBoundingClientRect()
		return [rect.y -holder.y - arrow.height/2,rect.x -holder.x -rect.width*0.75]
	}
	else{
		return [0,0]
	}
}
export function mount(object){
	const elements = object.refs.dragElements.children
	let positions = []
	let desiredPositions = []
	const offsetWidth = document.getElementsByClassName("objectHolder")[0].offsetWidth || 0
	const flex = 50;
	for (let x=0; x < elements.length; x++){
		let posInfo = elements.item(x).getBoundingClientRect();
		positions.push([posInfo.left,posInfo.top]);
		desiredPositions.push([[posInfo.left+flex-offsetWidth,posInfo.left-flex-offsetWidth],[posInfo.top+flex,posInfo.top-flex]]);
	}
	object.setState({currentPositions: positions, desiredPositions: desiredPositions, flex: flex, rotate: []})
}
