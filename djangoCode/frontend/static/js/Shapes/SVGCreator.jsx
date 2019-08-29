import React from 'react';
import {incrementShape,addUserInputError,instructionIncrement} from '../actions'
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
		let htmlTagRe = /<\/?[\w\s="/.':;#-\/\?]+>/gi;			  

		parseInput = parseInput.match(htmlTagRe)
		let checkParseInput = parseInput[0].split(/=|(\s*(?:(['"`]).*?\2)[^>|\s]*)\s?|\s/)	
		let desiredTokens = this.props.svg.match(htmlTagRe)
		desiredTokens[0] = desiredTokens[0].split(/=|(\s*(?:(['"`]).*?\2)[^>|\s]*)\s?|\s/)	
		let match = true
		for(let x of desiredTokens[0]){
			if (checkParseInput.indexOf(x) ==-1){
				match = false;
				break;
			}
		}
		parseInput[0] = parseInput[0].split(/=|(\s*(?:(['"`]).*?\2)[^>|\s]*)\s?|\s/)	
		parseInput[0] = parseInput[0].filter(x => x != '' &&  x != null  && x != "'" && x != "\"")
		//desiredTokens[0] = this.props.svg.split(/=|(\s*(?:(['"`]).*?\2)[^>|\s]*)\s?|\s/)	
		desiredTokens[0] = desiredTokens[0].filter(x => x != '' &&  x != null && x != "\"" && x != "'" && x != "\"")
		if ( match){
			dispatch(incrementShape())
			dispatch(instructionIncrement())
			dispatch(addUserInputError(parseInput,desiredTokens))
			this.refs.svgText.value = ''
			this.setState({svg: ''})
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
			<div className='card' style={{opacity: "0.5"}}>
			<svg viewBox={this.props.offset} dangerouslySetInnerHTML={{__html: this.state.svg}}></svg>

			</div>

			</div>)
	}
}

export default connect()(SVGCreator)