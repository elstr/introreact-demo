import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import Calculator from './Calculator'
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<Counter />, document.getElementById('root'));
ReactDOM.render(<Calculator />, document.getElementById('root'));
registerServiceWorker();