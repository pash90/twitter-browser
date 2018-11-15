/** Libraries */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { setConfiguration } from 'react-grid-system';

/** Components */
import App from './App';

/** Helpers */
import store, { history } from './store';

/** Styles */
import './index.scss';

/** Initialisation */
setConfiguration({
	gutterWidth: 16,
	containerWidths: [540, 750, 960, 960]
});

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<App />
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
);
