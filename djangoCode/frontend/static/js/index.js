import React from 'react';
import { render } from 'react-dom'

import './index.css';
import { Provider } from 'react-redux';
import rootReducer from './reducers'
import { createStore } from 'redux';
import ShowShape from './ShowShape';

const store = createStore(rootReducer)

render(
	<Provider store={store}> 
		<ShowShape/>
	</Provider>, 
	document.getElementById('root')
)
