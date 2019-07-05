import React from 'react';
import Draggable from 'react-draggable';

class AttributeHolder extends React.Component{
	constructor(props){
		super(props);
	}

	render() {
 
	return ( <div>
     {Object.entries(this.props.attr).map(function(entry) {
      	return <Draggable><div>{entry[0]} = {entry[1]}</div></Draggable> 	
  		})}
      </div>
      )

}
}
export default AttributeHolder;