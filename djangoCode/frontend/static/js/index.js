import React from 'react';
import { render } from 'react-dom'

import './index.css';
import { Provider } from 'react-redux';
import rootReducer from './reducers'
import { createStore , applyMiddleware } from 'redux';
import ShowShape from './ShowShape';
import { createLogger } from 'redux-logger'
import Cookies from 'js-cookie'




function postLog(state, action){
	const Http = new XMLHttpRequest();
	const url='/logging';
	const header =  "X-CSRFToken";
    const token = Cookies.get('csrftoken');
    console.log(action) 
	Http.open("POST", url, true);
	Http.setRequestHeader(header, token);
	var formData = new FormData();
	formData.append('state', JSON.stringify(state))
	formData.append('action', JSON.stringify(action))
	Http.send(formData)
	//Http.send({} JSON.stringify(state) +'&action=' + JSON.stringify(state));

/*	Http.onreadystatechange = (e) => {
	  console.log(Http.responseText)
	}*/
	return true
}
const logger = createLogger({
	predicate: (getState, action) => postLog(getState(), action)
})
const store = createStore(rootReducer,applyMiddleware(logger))

render(
	<Provider store={store}> 
		<ShowShape/>
	</Provider>, 
	document.getElementById('root')
)
