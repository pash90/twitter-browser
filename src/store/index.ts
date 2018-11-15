/** Libraries */
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import { composeWithDevTools } from 'redux-devtools-extension';

/** Interfaces */
import { AppState, Action } from '../types';

/** Reducers */
import createRootReducer from '../reducers';

const history = createBrowserHistory();

const store = createStore<AppState, Action, {}, {}>(
	createRootReducer(history),
	{},
	composeWithDevTools(applyMiddleware(routerMiddleware(history)))
);

export default store;
export { history };
