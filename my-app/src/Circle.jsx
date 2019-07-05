import React from 'react';

class Circle extends React.Component{

	render() {
		return (			
			<svg viewBox="-50 -50 100 100">
				<circle id="blueCircle" r="50" fill="blue" cx="0" cy="0"/>
			</svg>
		)
	}
}

export default Circle;