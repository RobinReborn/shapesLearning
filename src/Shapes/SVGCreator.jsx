import React from 'react';
import {incrementShape} from '../actions'
import { connect } from "react-redux";

class SVGCreator extends React.Component {
	constructor(props){
		super(props);
		this.setSVG = this.setSVG.bind(this);
		this.checkAccurate = this.checkAccurate.bind(this);
		this.state = {svg: ''}
	}
	setSVG = text => {
		this.setState({svg: text.target.value})
	}
	checkAccurate(){
		const {dispatch} = this.props;
		if (this.state.svg == this.props.svg){
			dispatch(incrementShape())
		}
	}
	render(){
		return(
			<div className='flipHolder' onClick={this.checkAccurate}>
			<div className='card' style={{height: "100%", zIndex: "1"}}>
			<input className='svgInput' type='text' onChange={this.setSVG}/>
			</div>
			<div className='card'>
			<svg viewBox="0 0 100 100" dangerouslySetInnerHTML={{__html: this.state.svg}}></svg>
			</div>
			</div>)
	}
}

export default connect()(SVGCreator)