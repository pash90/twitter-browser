/** Libraries */
import Axios, { AxiosResponse, AxiosError } from 'axios';

/** Helpers */
import store from '../store';
import { SearchResult, SearchError } from '../types';

/** Initialisation */
const axiosInstance = Axios.create({
	baseURL: 'https://public-twitter-browser.herokuapp.com'
});

const dispatch = store.dispatch;

const errorHandler = (err: AxiosError) => {
	if (err.response) {
		const { error } = err.response.data as SearchError;
		// error in response
	} else if (err.request) {
		// error in making request -> shouldn't happen
	} else {
		// network error
	}

	dispatch({
		type: 'STOP_SEARCH'
	});
	return Promise.reject(err);
};

export const searchTwitter = (query: string) => {
	dispatch({
		type: 'START_SEARCH'
	});

	axiosInstance
		.get('/search', {
			params: {
				q: query
			}
		})
		.then((response: AxiosResponse<{ data: SearchResult[] }>) => {
			dispatch({
				type: 'SET_SEARCH_RESULTS',
				payload: response.data.data
			});

			dispatch({
				type: 'STOP_SEARCH'
			});
		})
		.catch(errorHandler);
};

export const getUserById = (id: string) => {
	axiosInstance
		.get('/searchForUser', {
			params: {
				id
			}
		})
		.then((response: AxiosResponse<{ data: SearchResult }>) => {
			dispatch({
				type: 'SET_CURRENT_USER',
				payload: response.data.data
			});
		})
		.catch(errorHandler);
};
