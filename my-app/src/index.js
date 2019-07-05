import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Layout from './Layout';

ReactDOM.render(<Layout/>, document.getElementById('root'));
registerServiceWorker();