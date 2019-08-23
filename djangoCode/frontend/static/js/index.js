import React from 'react';
import { render } from 'react-dom'

import './index.css';
import { Provider } from 'react-redux';
import rootReducer from './reducers'
import { createStore , applyMiddleware } from 'redux';
import ShowShape from './ShowShape';
import logger from 'redux-logger'

const store = createStore(rootReducer,applyMiddleware(logger))

render(
	<Provider store={store}> 
		<ShowShape/>
	</Provider>, 
	document.getElementById('root')
)
