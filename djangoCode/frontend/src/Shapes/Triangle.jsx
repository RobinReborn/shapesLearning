import React from 'react';

class Triangle extends React.Component{

	render() {
		return (			
			<svg viewBox="0 0 100 100">
				<polygon points="0 95, 100 95, 50 9" fill="green"/>
			</svg>
		)		
	}
}

export default Triangle;