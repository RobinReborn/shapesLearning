import React from 'react';


class ArrowHolder extends React.Component{
	render(){
		return(
			<svg id={this.props.id} viewBox="0 0 100 100" className='arrows' style={{ top: this.props.top, 
																left: this.props.left}}>
					<g transform={"rotate(" + this.props.rotates + ", 50, 50)"}>
						<line x1='25' y1='50' x2='0' y2='50'
						style={{strokeWidth:1, stroke:'red', display: this.props.visible}}/>
						<line x1='0' y1='50' x2='8' y2='46' style={{strokeWidth:1, stroke:'red',display: this.props.visible}}/>
						<line x1='0' y1='50' x2='8' y2='54' style={{strokeWidth:1, stroke:'red', display: this.props.visible}}/></g>
						</svg>)
	}
}

export default ArrowHolder