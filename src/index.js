import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store/reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);

// window.addEventListener('beforeinstallprompt', (e) => {
// 	console.log('beforeinstallprompt event has fired');
// 	e.prompt();
// });

serviceWorker.register();