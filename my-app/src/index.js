import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import CircleCode from './CircleCode';

ReactDOM.render(<CircleCode />, document.getElementById('root'));
registerServiceWorker();