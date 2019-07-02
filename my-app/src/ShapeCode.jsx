import React from 'react';
import ReactDOM from 'react-dom';

class ShapeCode extends React.Component {
		constructor(props) {
	    super(props);
	    this.state = {isToggleOn: true, Value: ''};
	    this.changeCode = this.changeCode.bind(this);
  	}

  changeCode(event) {
    this.setState({value: event.target.value});
  }

	render() {
		return (
	        <div id='code'>
	            <p>
		            <br/>
		            &lt;circle id=
		            <br/>
		            "blueCircle"
		            <br/>
		            r=<input type='text' value="350" onChange={this.changeCode}></input> 
		            <br/>
		            fill=<input type='text' value="blue" onChange={this.changeCode}></input> 
		            <br/>
		            cx=<input type='text' value="350" onChange={this.changeCode}></input> 
		            <br/>
		            cy=<input type='text' value="350" onChange={this.changeCode}></input>&gt;
		            <br/>
		            &lt;/circle&gt; 
	            </p>
	        </div>
	        )
	}
}
export default ShapeCode;