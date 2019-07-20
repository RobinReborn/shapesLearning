import {snapSet, instructionIncrement, addError, showArrow , clearError} from '../actions';
export function handleDrag(e,ui) {
	const { dispatch } = this.props;
	const elementNumber = Number(ui.node.id.substring(10))
	const [x, y] = this.state.currentPositions[elementNumber];
	let oldPositions = [...this.state.currentPositions];
	let oldPosition = {...oldPositions[elementNumber]};
	oldPosition = [oldPosition[0] + ui.deltaX, oldPosition[1] + ui.deltaY]
	oldPositions[elementNumber] = oldPosition
	this.setState({currentPositions : oldPositions})
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
		dispatch(clearError(ui.node.children[0].textContent))

		let check = true;
		for (let x=0;x< document.getElementsByClassName('react-draggable').length; x++){
			if (document.getElementsByClassName('react-draggable')[x].style.visibility != 'hidden'){
				check = false
			}
		}
		if (check){
			dispatch(instructionIncrement())
		}
	}
	else {
		dispatch(addError(ui.node.children[0].textContent,"element misplaced"))
		//ui.node.setAttribute('viewBox','0 0 100 100')
		//rotate just the arrow
		let arrow  = `<svg><line x1='50' y1='50' x2='0' y2='50'/><line x1='0' y1='50' x2='10' y2='60'/>
							<line x1='0' y1='50' x2='10' y2='40'/></svg>`
		//arrow  = new DOMParser().parseFromString(arrow, "text/xml");
		ui.node.innterHTML += arrow

		dispatch(showArrow(elementNumber))
		//ui.node.children[0].setAttribute('transform',"rotate(100)")
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
