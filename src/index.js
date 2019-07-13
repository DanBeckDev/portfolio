import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

const mountNode = document.getElementById('root');
ReactDOM.render(<App />, mountNode);
serviceWorker.unregister();
