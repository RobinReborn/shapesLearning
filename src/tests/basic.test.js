import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import { expect } from 'chai';
import { mount , shallow} from 'enzyme';
import sinon from 'sinon';
import configureStore from 'redux-mock-store'
import mountWithProvider from './testHelper';

import ShowShape from '../ShowShape'
import Instructions from '../Instructions'
import { Provider } from 'react-redux';
import rootReducer from '../reducers'
import { createStore } from 'redux';
import Layout from '../Layout';
import ClickCircle from '../Shapes/ClickCircle';
import ClickRectangle from '../Shapes/ClickRectangle';
import CircleElements from '../Shapes/CircleElements';
import {handleDrag,handleStop,getArrowOffset,checkFinished} from '../Shapes/dragHelpers'
import DragAttrCircle from '../Shapes/DragAttrCircle';
import DragAttrRectangle from '../Shapes/DragAttrRectangle';

beforeAll(() => {
  const div = document.createElement('div');
  window.domNode = div;
  document.body.appendChild(div);
})


import { assert } from 'chai';

describe('<ShowShape/>', () => {
	let store = createStore(rootReducer)

	it('has an <Instructions> component which increments appropriately', () => {
		const wrapper = mount(<Provider store={store}> <ShowShape/></Provider>);
		expect(wrapper.find(Layout)).to.have.lengthOf(1)
		expect(wrapper.find(Instructions)).to.have.lengthOf(1)
		wrapper.find('.flipHolder').simulate('click')

		expect(wrapper.find(Instructions).find('#instructions').text()).to.match(/^Click again to see the next shape/)
		wrapper.find('.flipHolder').simulate('click')
		expect(wrapper.find(Instructions).find('#instructions').text()).to.match(/^Click on the Rectangle on the left to see the code that generates it/)
			wrapper.find('.flipHolder').simulate('click')

		expect(wrapper.find(Instructions).find('#instructions').text()).to.match(/^Click again to see the next shape/)
		wrapper.find('.flipHolder').simulate('click')
		expect(wrapper.find(Instructions).find('#instructions').text()).to.match(/^Click on the Triangle on the left to see the code that generates it/)

	})
	it("clicking gets to next shape", () => {
		const wrapper = mount(<Provider store={store}> <ShowShape/></Provider>,{ attachTo: window.domNode });
		wrapper.find('.flipHolder').simulate('click')
		wrapper.find('.flipHolder').simulate('click')

		let circleWrapper = wrapper.find(CircleElements)
		let arrowVisibility = circleWrapper.find('.arrows').at(0).find('g').find('line').get(0).props.style
		expect(arrowVisibility).to.have.property('display', 'none');
		
		circleWrapper.find("Draggable").at(1).simulate("mousedown");
		circleWrapper.find("Draggable").at(1).simulate("mouseup");
		circleWrapper.find("Draggable").at(2).simulate("mousedown");
		circleWrapper.find("Draggable").at(2).simulate("mouseup");
		circleWrapper.find("Draggable").at(3).simulate("mousedown");
		circleWrapper.find("Draggable").at(3).simulate("mouseup");
		circleWrapper.find("Draggable").at(0).simulate("mousedown");
		circleWrapper.find("Draggable").at(0).simulate("mouseup");
		let reduxState = wrapper.state().store.getState()
		console.log(reduxState.snapReducer.snapped)
		expect(reduxState.snapReducer.snapped).to.deep.equal([ true, true, true, true ]);
		wrapper.find('.card').at(1).simulate('click')
		expect(wrapper.find(DragAttrRectangle)).to.have.lengthOf(1)
	})
})