import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import sinon from 'sinon';

import ShowShape from '../ShowShape.jsx'
import Instructions from '../Instructions.jsx'
import { Provider } from 'react-redux';
import rootReducer from '../reducers'
import { createStore } from 'redux';
import Layout from '../Layout'
describe('<ShowShape/>', () => {
	const store = createStore(rootReducer)

	it('has an <Instructions> component', () => {
		const wrapper = mount(<Provider store={store}> <ShowShape/></Provider>);
		console.log(wrapper)
		expect(wrapper.find(Layout)).to.have.lengthOf(1)
		expect(wrapper.find(Instructions)).to.have.lengthOf(1)
	})
})