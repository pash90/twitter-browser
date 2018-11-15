/** Libraries */
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

/** Interfaces */
import { Action, SearchResultState } from '../types';

const initialSearchState = {
	isSearching: false
};

const SearchReducer = (
	state: SearchResultState = initialSearchState,
	action: Action
) => {
	switch (action.type) {
		case 'SET_SEARCH_RESULTS':
			return { ...state, results: action.payload };

		case 'SET_CURRENT_USER':
			return { ...state, current: action.payload };

		case 'START_SEARCH':
			return { ...state, isSearching: true };

		case 'STOP_SEARCH':
			return { ...state, isSearching: false };

		default:
			return state;
	}
};

export default (history: History) =>
	combineReducers({
		router: connectRouter(history),
		search: SearchReducer
	});
