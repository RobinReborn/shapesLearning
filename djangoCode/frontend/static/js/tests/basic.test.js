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
import UserInputRectangle from '../Shapes/UserInputRectangle';
import UserInputTriangle from '../Shapes/UserInputTriangle';
import Rectangle from '../Shapes/Rectangle';
import Circle from '../Shapes/Circle';
import SVGCreator from '../Shapes/SVGCreator';
import Triangle from '../Shapes/Triangle';

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
		
		let shapeStyle = wrapper.find('.flipHolder').find('.card').get(0).props.style
		expect(shapeStyle).to.have.property('opacity',0.2)

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
		expect(wrapper.find(Instructions).find('#instructions').text()).to.match(/^Drag the items from the right to the appropriate location on the left Circle/)
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
		expect(wrapper.find(Instructions).find('#instructions').text()).to.match(/^click again to see the next shape/)

		let reduxState = store.getState()
		expect(reduxState.snapReducer.snapped).to.deep.equal([ true, true, true, true ]);
		wrapper.find('.card').at(1).simulate('click')
		expect(wrapper.find(Instructions).find('#instructions').text()).to.match(/^Drag the items from the right to the appropriate location on the left Rectangle/)

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
		reduxState = store.getState()

		expect(wrapper.find(Instructions).find('#instructions').text()).to.match(/^click again to see the next shape/)
		expect(reduxState.snapReducer.snapped).to.deep.equal([ true, true, true, true ]);
		wrapper.find('.card').at(1).simulate('click')
		expect(wrapper.find(Instructions).find('#instructions').text()).to.match(/^Drag the items from the right to the appropriate location on the left Triangle/)

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
		reduxState = store.getState()

		expect(wrapper.find(Instructions).find('#instructions').text()).to.match(/^click again to see the next shape/)

		expect(reduxState.snapReducer.snapped).to.deep.equal([ true, true, true, true ]);
})
	it("setting the right color for a userinput shape and clicking moves to the next shape", () => {
	
		const wrapper = mount(<Provider store={store}> <ShowShape/></Provider>);
		wrapper.find('.card').at(1).simulate('click')
		expect(wrapper.find(Instructions).find('#instructions').text()).to.match(/^Fill in the color of the Circle/)

		expect(wrapper.find(UserInputCircle)).to.have.lengthOf(1)
		let input = wrapper.find('input').at(3)
		input.simulate('change', { target: { value: 'blue'}});
		wrapper.find('.flipHolder').simulate('click')
		expect(wrapper.find(UserInputRectangle)).to.have.lengthOf(1)
		expect(wrapper.find(Instructions).find('#instructions').text()).to.match(/^Fill in the color of the Rectangle/)

		input = wrapper.find('input').at(3)
		input.simulate('change', { target: { value: 'red'}});
		wrapper.find('.flipHolder').simulate('click')
		expect(wrapper.find(UserInputTriangle)).to.have.lengthOf(1)
		expect(wrapper.find(Instructions).find('#instructions').text()).to.match(/^Fill in the color of the Triangle/)

		input = wrapper.find('input').at(3)
		input.simulate('change', { target: { value: 'green'}});
		wrapper.find('.flipHolder').simulate('click')
	})

	it("adding the right text to an SVGCreator lets you move to next shape", () => {
		const wrapper = mount(<Provider store={store}> <ShowShape/></Provider>);
		expect(wrapper.find(SVGCreator)).to.have.lengthOf(1)
		let input = wrapper.find('input').at(3)
		input.simulate('change', { target: { value: '<circle fill="blue" > </circle>'}});
		wrapper.find('#submitSVG').simulate('click')

		expect(wrapper.find("#error").text()).to.equal("r is missing ")
		input.simulate('change', { target: { value: '<circle r="40" fill="blue"></circle>'}});
		wrapper.find('#submitSVG').simulate('click')
		expect(wrapper.find("#error").text()).to.equal("r value is wrong, it should be \"50\" ")

		input.simulate('change', { target: { value: '<circle r="50" fill="blue"> </circle>'}});
		wrapper.find('#submitSVG').simulate('click')
		expect(wrapper.find("#error").text()).to.equal("")
		expect(wrapper.find(Instructions).find('#instructions').text()).to.match(/^Try to generate the shape on the right, click submit when you are done or to get hints/)
		expect(wrapper.find(Rectangle)).to.have.lengthOf(1);

		

		input.simulate('change', { target: { value: '<rect width="100" height="70" fill="red"></rect>'}});
		wrapper.find('#submitSVG').simulate('click')
		expect(wrapper.find("#error").text()).to.equal("")
		expect(wrapper.find(Instructions).find('#instructions').text()).to.match(/^Try to generate the shape on the right, click submit when you are done or to get hints/)
		expect(wrapper.find(Triangle)).to.have.lengthOf(1);

		input.simulate('change', { target: { value: '<polygon points="0 95, 100 95, 50 9" fill="green"></polygon>'}});
		wrapper.find('#submitSVG').simulate('click')
		expect(wrapper.find("#error").text()).to.equal("")
		expect(wrapper.find(Instructions).find('#instructions').text()).to.match(/^Congratulations, you are finished!/)


	})
})