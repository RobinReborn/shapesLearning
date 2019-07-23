import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';

import ShowShape from '../ShowShape'
import Instructions from '../Instructions'
import { Provider } from 'react-redux';
import rootReducer from '../reducers'
import { createStore } from 'redux';
import Layout from '../Layout';
import ClickCircle from '../Shapes/ClickCircle';
import ClickRectangle from '../Shapes/ClickRectangle';

describe('<ShowShape/>', () => {
	const store = createStore(rootReducer)

	it('has an <Instructions> component', () => {
		const wrapper = mount(<Provider store={store}> <ShowShape/></Provider>);
		expect(wrapper.find(Layout)).to.have.lengthOf(1)
		expect(wrapper.find(Instructions)).to.have.lengthOf(1)
		expect(wrapper.find(ClickCircle)).to.have.lengthOf(1)

	})
	it("clicking gets to next shape", () => {
		const onButtonClick = sinon.spy();
		const wrapper = mount(<Provider store={store}> <ShowShape/></Provider> )
		wrapper.find('.flipHolder').simulate('click')
		expect(wrapper.find(Instructions).find('#instructions').text()).to.match(/^Click again to see the next shape/)
		wrapper.find('.flipHolder').simulate('click')
		expect(wrapper.find(ClickRectangle)).to.have.lengthOf(1)
		expect(wrapper.find(Instructions).find('#instructions').text()).to.match(/^Click on the Rectangle on the left to see the code that generates it/)

	})
})