import {instructionIncrement} from '../actions';

export function click(){
	const { dispatch } = this.props;
	if (!this.state.clicked){

	  		this.setState({
				opacity : this.state.opacity === 1 ? 0.2 : 1,
				zIndex: this.state.zIndex === 1 ? -1 : 1,
				clicked: true
			})
			dispatch(instructionIncrement())
  		}
  		else if (this.state.clicked===true) {
  		dispatch(instructionIncrement())
        this.update()
      }
  	}