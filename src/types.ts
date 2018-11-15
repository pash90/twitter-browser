/// <reference types="react-scripts" />

/** Libraries */
import { RouterState } from 'connected-react-router';
import { User, Coordinates, Entities, Place } from 'twitter-d';

export interface Action<T = any> {
	type: string;
	payload?: T;
}

export interface SearchError {
	error: string;
}

export interface Tweet {
	created_at: string;
	id: number;
	id_str: string;
	text: string;
	truncated: boolean;
	source: string;
	in_reply_to_status_id: number;
	in_reply_to_status_id_str: string;
	in_reply_to_user_id: number;
	in_reply_to_user_id_str: string;
	in_reply_to_screen_name: string;
	geo: Coordinates | null;
	coordinates: Coordinates | null;
	contributors?: null;
	is_quote_status: boolean;
	retweet_count: number;
	favorite_count: number;
	favorited: boolean;
	retweeted: boolean;
	lang: string;
	entities: Entities;
	user: User;
	place: Place | null;
}

export interface SearchResultState {
	results?: User[];
	current?: User;
	currentTweets?: Tweet[];
	isSearching: boolean;
}

export interface AppState {
	router: RouterState;
	search: SearchResultState;
}
