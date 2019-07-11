import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layout from './Layout';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers'
import { createStore } from 'redux';


const store = createStore(rootReducer)

ReactDOM.render(<Provider store={store}> <Layout /> </Provider>, document.getElementById('root') );
