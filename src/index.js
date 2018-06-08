import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App name='Vladan Petrovic'/>, document.getElementById('root'));
registerServiceWorker();

//ReactDOM.render(<App/>,)  it's like calling functions, we do now that componets are created in funcs or classeS.
//so, like calling functions, and passing smth to them.