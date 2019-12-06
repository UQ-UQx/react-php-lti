import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

const appContainer = document.getElementById('app');
const state = {
    input_val: 'Welcome to React App with PHP API',
    api_message: '',
};
ReactDOM.render(<App appState={state} />, appContainer);
