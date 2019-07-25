import React from 'react';

class SVGCreator extends React.Component {
	constructor(props){
		super(props);
		this.setSVG = this.setSVG.bind(this);
		//this.renderSVG = this.renderSVG.bind(this);
		this.state = {svg: ''}
	}
	setSVG = text => {
		this.setState({svg: text.target.value})
	}
/*	renderSVG(){
		return {__html: this.state.svg}
	}*/
	render(){
		return(
			<div className='flipHolder'>
			<div className='card' style={{height: "100%", zIndex: "1", opacity: '0.5'}}>
			<input className='svgInput' type='text' onChange={this.setSVG}/>
			</div>
			<div className='card'>
			<svg viewBox="0 0 100 100" dangerouslySetInnerHTML={{__html: this.state.svg}}></svg>
			</div>
			</div>)
	}
}

export default SVGCreator