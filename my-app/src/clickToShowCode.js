import rootReducer from './redux/reducers/';
import {incrementInstructions} from './redux/actions';

export function click(){
	if (!this.state.clicked){

	  		this.setState({
				opacity : this.state.opacity === 1 ? 0.2 : 1,
				zIndex: this.state.zIndex === 1 ? -1 : 1,
				clicked: true
			})
			incrementInstructions(1)
  		}
  		else if (this.state.clicked===true) {
        this.update()
      }
  	}