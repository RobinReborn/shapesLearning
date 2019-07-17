import {snapSet, instructionIncrement, addError, clearError} from '../actions';
export function handleDrag(e,ui) {
	const { dispatch } = this.props;
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
		dispatch(snapSet(elementNumber))
		dispatch(clearError())
		}
	else {
		dispatch(addError(ui.node.children[0].textContent,"element misplaced"))
		}
	}
export function mount(object){
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
	object.setState({currentPositions: positions, desiredPositions: desiredPositions})
}
