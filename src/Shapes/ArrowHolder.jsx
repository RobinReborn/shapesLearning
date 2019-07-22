import React from 'react';


class ArrowHolder extends React.Component{
	render(){
		return(
			<svg id={this.props.id} viewBox="0 0 100 60" className='arrows' style={{ top: this.props.top, 
																left: this.props.left}}>
					<g transform={"rotate(" + this.props.rotates + ", 50, 30)"}>
						<line x1='30' y1='30' x2='0' y2='30'
						style={{strokeWidth:1, stroke:'red', display: this.props.visible}}/>
						<line x1='0' y1='30' x2='8' y2='26' style={{strokeWidth:1, stroke:'red',display: this.props.visible}}/>
						<line x1='0' y1='30' x2='8' y2='34' style={{strokeWidth:1, stroke:'red', display: this.props.visible}}/></g>
						</svg>)
	}
}

export default ArrowHolder