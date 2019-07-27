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
		//remove linebreaks etc,  by token?
		let parseInput = this.state.svg.replace(/(\r\n|\n|\r)/gm," ");
		parseInput = parseInput.replace(/\s+/g, " ");
		parseInput = parseInput.toLowerCase()
		parseInput = parseInput.replace(/'/g,"\"")

		let checkParseInput = parseInput.split(/(\S*(?:(['"`]).*?\2)\S*)\s?|\s/)
		let desiredTokens = this.props.svg.split(/(\S*(?:(['"`]).*?\2)\S*)\s?|\s/)
		let match = true
		for(let x of desiredTokens){
			if (checkParseInput.indexOf(x) ==-1){
				match = false;
				break;
			}
		}
		parseInput = parseInput.split(/=|(\s*(?:(['"`]).*?\2)\S*)\s?|\s/)
		parseInput = parseInput.filter(x => x != '' &&  x != null  && x != "'")
		desiredTokens = this.props.svg.split(/=|(\s*(?:(['"`]).*?\2)\S*)\s?|\s/)
		desiredTokens = desiredTokens.filter(x => x != '' &&  x != null && x != "\"" && x != "'")
		if ( match){
			dispatch(incrementShape())

			dispatch(addUserInputError(parseInput,desiredTokens))
			this.setState({svg: ''})
			this.refs.svgText = ''
		}
		else{
			dispatch(addUserInputError(parseInput,desiredTokens))
		}
	}

	render(){
		return(
			<div className='flipHolder' >
			<div className='card' style={{height: "100%", zIndex: "1"}}>
			<input className='svgInput' type='text' onChange={this.setSVG} ref='svgText'/>
			<button id='submitSVG' onClick={this.checkAccurate}>Submit</button>
			</div>
			<div className='card'>
			<svg viewBox="0 0 100 100" dangerouslySetInnerHTML={{__html: this.state.svg}}></svg>

			</div>

			</div>)
	}
}

export default connect()(SVGCreator)