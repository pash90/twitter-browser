/// <reference types="react-scripts" />

/** Libraries */
import { RouterState } from 'connected-react-router';
import { FormStateMap } from 'redux-form';

export interface AppState {
	router: RouterState;
	form: FormStateMap;
}

export interface Action<T = any> {
	type: string;
	payload: T;
}
