import React from 'react';
import Draggable from 'react-draggable';

class ElementMover extends React.Component {
	
	render() {
		
		return (
			<Draggable
        axis="both"
        handle=".handle"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        grid={[1, 1]}
        scale={1}
        onStart={this.handleStart}
        onDrag={this.handleDrag}
        onStop={this.handleStop}>
        <div>
          <div className="handle">Drag from here</div>
          <div>This readme is really dragging on...</div>
        </div>
      </Draggable>
		)
	}
}
export default ElementMover;