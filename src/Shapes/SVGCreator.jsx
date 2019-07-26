import React from 'react';
import {incrementShape,addUserInputError} from '../actions'
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
		//remove linebreaks etc
		let parseInput = this.state.svg.replace(/(\r\n|\n|\r)/gm," ");
		parseInput = parseInput.replace(/\s+/g, " ");
		parseInput = parseInput.toLowerCase()
		//we need to do something to not split when attribute values themselves have spaces like polygon points
		let checkParseInput = parseInput.split(' ')
		let desiredTokens = this.props.svg.split(' ')
		let match = true
		for(let x of desiredTokens){
			if (checkParseInput.indexOf(x) ==-1){
				match = false;
				break;
			}
		}
		if ( match){
			dispatch(incrementShape())
		}
		else{
			parseInput = parseInput.split(/ |=/)
			desiredTokens = this.props.svg.split(/ |=/)
			dispatch(addUserInputError(parseInput,desiredTokens))
		}
	}
	render(){
		return(
			<div className='flipHolder' >
			<div className='card' style={{height: "100%", zIndex: "1"}}>
			<input className='svgInput' type='text' onChange={this.setSVG}/>
			<button onClick={this.checkAccurate}>Submit</button>
			</div>
			<div className='card'>
			<svg viewBox="0 0 100 100" dangerouslySetInnerHTML={{__html: this.state.svg}}></svg>

			</div>

			</div>)
	}
}

export default connect()(SVGCreator)