import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './tools/store';
import { history } from './tools/history';
import { routes } from './tools/routes';

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>{routes}</Router>
	</Provider>,
	document.getElementById('root')
);
