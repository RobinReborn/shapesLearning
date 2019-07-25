import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import { expect } from 'chai';
import { mount , shallow} from 'enzyme';
import sinon from 'sinon';

import ShowShape from '../ShowShape'
import Instructions from '../Instructions'
import { Provider } from 'react-redux';
import rootReducer from '../reducers'
import { createStore } from 'redux';
import Layout from '../Layout';
import ClickCircle from '../Shapes/ClickCircle';
import ClickRectangle from '../Shapes/ClickRectangle';
import ClickTriangle from '../Shapes/ClickTriangle';
import UserInput from '../UserInput';
import DesiredOutput from '../DesiredOutput'
import CircleElements from '../Shapes/CircleElements';
import RectangleElements from '../Shapes/RectangleElements';
import TriangleElements from '../Shapes/TriangleElements';
import DragAttrCircle from '../Shapes/DragAttrCircle';
import DragAttrRectangle from '../Shapes/DragAttrRectangle';
import DragAttrTriangle from '../Shapes/DragAttrTriangle'
import UserInputCircle from '../Shapes/UserInputCircle';
beforeAll(() => {
  const div = document.createElement('div');
  window.domNode = div;
  document.body.appendChild(div);
})


import { assert } from 'chai';

describe('<ShowShape/>', () => {
	let store = createStore(rootReducer)
	it('has an <Instructions> component which increments appropriately on clicks', () => {
		const wrapper = mount(<Provider store={store}> <ShowShape/></Provider>);
		expect(wrapper.find(Layout)).to.have.lengthOf(1)
		expect(wrapper.find(Instructions)).to.have.lengthOf(1)
		expect(wrapper.find(ClickCircle)).to.have.lengthOf(1)
		expect(wrapper.find(DesiredOutput)).to.have.lengthOf(1)
		expect(wrapper.find(UserInput)).to.have.lengthOf(1)
		wrapper.find('.flipHolder').simulate('click')

		expect(wrapper.find(Instructions).find('#instructions').text()).to.match(/^Click again to see the next shape/)
		wrapper.find('.flipHolder').simulate('click')
		expect(wrapper.find(ClickRectangle)).to.have.lengthOf(1)
		expect(wrapper.find(Instructions).find('#instructions').text()).to.match(/^Click on the Rectangle on the left to see the code that generates it/)
		wrapper.find('.flipHolder').simulate('click')

		expect(wrapper.find(Instructions).find('#instructions').text()).to.match(/^Click again to see the next shape/)
		wrapper.find('.flipHolder').simulate('click')
		expect(wrapper.find(ClickTriangle)).to.have.lengthOf(1)
		expect(wrapper.find(Instructions).find('#instructions').text()).to.match(/^Click on the Triangle on the left to see the code that generates it/)

	})
	it("moving elements to dragAttrCircle and clicking gets to next shape", () => {
		const wrapper = mount(<Provider store={store}> <ShowShape/></Provider>,{ attachTo: window.domNode });
		wrapper.find('.flipHolder').simulate('click')
		wrapper.find('.flipHolder').simulate('click')

		let circleWrapper = wrapper.find(CircleElements)
		let arrowVisibility = circleWrapper.find('.arrows').at(0).find('g').find('line').get(0).props.style
		expect(arrowVisibility).to.have.property('display', 'none');
		circleWrapper.find("Draggable").at(0).simulate("mousedown");
		circleWrapper.find("Draggable").at(0).simulate("mouseup");		
		circleWrapper.find("Draggable").at(1).simulate("mousedown");
		circleWrapper.find("Draggable").at(1).simulate("mouseup");
		circleWrapper.find("Draggable").at(2).simulate("mousedown");
		circleWrapper.find("Draggable").at(2).simulate("mouseup");
		circleWrapper.find("Draggable").at(3).simulate("mousedown");
		circleWrapper.find("Draggable").at(3).simulate("mouseup");

		let reduxState = wrapper.state().store.getState()
		expect(reduxState.snapReducer.snapped).to.deep.equal([ true, true, true, true ]);
		wrapper.find('.card').at(1).simulate('click')
		expect(wrapper.find(DragAttrRectangle)).to.have.lengthOf(1)
		let rectWrapper = wrapper.find(RectangleElements)
		rectWrapper.find("Draggable").at(0).simulate("mousedown");
		rectWrapper.find("Draggable").at(0).simulate("mouseup");		
		rectWrapper.find("Draggable").at(1).simulate("mousedown");
		rectWrapper.find("Draggable").at(1).simulate("mouseup");
		rectWrapper.find("Draggable").at(2).simulate("mousedown");
		rectWrapper.find("Draggable").at(2).simulate("mouseup");
		rectWrapper.find("Draggable").at(3).simulate("mousedown");
		rectWrapper.find("Draggable").at(3).simulate("mouseup");
		reduxState = wrapper.state().store.getState()
		expect(reduxState.snapReducer.snapped).to.deep.equal([ true, true, true, true ]);
		wrapper.find('.card').at(1).simulate('click')
		expect(wrapper.find(DragAttrTriangle)).to.have.lengthOf(1)

		let triWrapper = wrapper.find(TriangleElements)
		triWrapper.find("Draggable").at(0).simulate("mousedown");
		triWrapper.find("Draggable").at(0).simulate("mouseup");		
		triWrapper.find("Draggable").at(1).simulate("mousedown");
		triWrapper.find("Draggable").at(1).simulate("mouseup");
		triWrapper.find("Draggable").at(2).simulate("mousedown");
		triWrapper.find("Draggable").at(2).simulate("mouseup");
		triWrapper.find("Draggable").at(3).simulate("mousedown");
		triWrapper.find("Draggable").at(3).simulate("mouseup");
		reduxState = wrapper.state().store.getState()
		expect(reduxState.snapReducer.snapped).to.deep.equal([ true, true, true, true ]);
		wrapper.find('.card').at(1).simulate('click')
		expect(wrapper.find(UserInputCircle)).to.have.lengthOf(1)


	})
})