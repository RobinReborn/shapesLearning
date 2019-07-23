import '@testing-library/react/cleanup-after-each'
import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import ShowShape from '../ShowShape';
import rootReducer from '../reducers'
import { createStore } from 'redux';
import { Provider } from 'react-redux';

test('see if basic components are present', () => {
	const store = createStore(rootReducer)
	const {queryByText} = render(<Provider store={store}><ShowShape/></Provider>)
	expect(queryByText("afds")).toBeNull()
})