/** Libraries */
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { reducer } from 'redux-form';

export default (history: History) =>
	combineReducers({
		router: connectRouter(history),
		form: reducer
	});
