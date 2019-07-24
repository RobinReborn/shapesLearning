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
	})
	it("clicking gets to next shape", () => {
		const testState = {level:1,shape:0,
			/*currentPosition: [
  1064.449951171875,
  294.25],desiredPosition: [1200,300]*/} 
		const wrapper = mount(<Provider store={store}> <CircleElements/></Provider>,{ attachTo: window.domNode } )

		//do something to simulate on drag
		wrapper.debug()
		let draggable = wrapper.find('#Draggable_0')
		let CircleElementsWrapperInstance = wrapper.instance()
		let arrowVisibility = wrapper.find('.arrows').at(0).find('g').find('line').get(0).props.style
		draggable.simulate('mousedown')
		CircleElementsWrapperInstance.handleDrag
		expect(arrowVisibility).to.have.property('display', 'none');
		draggable.simulate('mousemove' , {pageX: 42,pageY: 44})
		CircleElementsWrapperInstance.handleStop
		draggable.simulate('mouseup')
		//console.log(wrapper.state())
		
		arrowVisibility = wrapper.find('.arrows').at(0).find('g').find('line').get(0).props.style
		expect(arrowVisibility).to.have.property('display', 'block');
	})
})