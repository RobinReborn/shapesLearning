import rootReducer from './redux/reducers/';
import {INCREMENT_SHAPE} from './redux/actionTypes';

export function click(){
	if (!this.state.clicked){

	  		this.setState({
				opacity : this.state.opacity === 1 ? 0.2 : 1,
				zIndex: this.state.zIndex === 1 ? -1 : 1,
				clicked: true
			})
			this.props.update(['updateInstructions'])
  		}
  		else if (this.state.clicked===true) {
  			/*store.dispatch(INCREMENT_SHAPE) {
    			this.setState(state => rootReducer(state, INCREMENT_SHAPE))
  			}
  			//this.state = rootReducer(this.state, INCREMENT_SHAPE)*/
  			this.props.update(['updateShape'])
  		}
  	}