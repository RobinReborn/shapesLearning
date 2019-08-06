import React from 'react';
class CircleAnimation extends React.Component{

	render(){
		return(
			<svg viewBox="0 0 100 100">
				<circle r='10' fill='blue' cx='0' cy='50'>
					    <animate attributeType="XML" attributeName="cx" from="0" to="100"
        					dur="10s" repeatCount="indefinite"/>
				</circle>
			</svg>)
	}

}

export default CircleAnimation