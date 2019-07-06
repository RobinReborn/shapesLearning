import React from 'react';

class Triangle extends React.Component{

	render() {
		return (			
			<svg viewBox="0 0 100 100">
				<polygon points="0 100, 100 100, 50,14" fill="green"/>
			</svg>
		)
	}
}

export default Triangle;