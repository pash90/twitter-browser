/// <reference types="react-scripts" />

/** Libraries */
import { RouterState } from 'connected-react-router';

export interface Action<T = any> {
	type: string;
	payload?: T;
}

export interface SearchResult {
	id: number;
	id_str: string;
	name: string;
	screen_name: string;
	location: string;
	description: string;
	url: string;
	entities: {
		url: {
			urls: [
				{
					url: string;
					expanded_url: string;
					display_url: string;
					indices: [number, number];
				}
			];
		};
		description: {
			urls: [];
		};
	};
	protected: boolean;
	followers_count: number;
	friends_count: number;
	listed_count: number;
	created_at: string;
	favourites_count: number;
	utc_offset: null;
	time_zone: null;
	geo_enabled: boolean;
	verified: boolean;
	statuses_count: number;
	lang: string;
	status: {
		created_at: string;
		id: number;
		id_str: string;
		text: string;
		truncated: boolean;
		entities: {
			hashtags: [];
			symbols: [];
			user_mentions: [
				{
					screen_name: string;
					name: string;
					id: number;
					id_str: string;
					indices: [number, number];
				},
				{
					screen_name: string;
					name: string;
					id: number;
					id_str: string;
					indices: [number, number];
				},
				{
					screen_name: string;
					name: string;
					id: number;
					id_str: string;
					indices: [number, number];
				}
			];
			urls: [];
		};
		/** Its HTML so can inserted directly -> dangerouslySetInnerHTML prop */
		source: string;
		in_reply_to_status_id: number;
		in_reply_to_status_id_str: string;
		in_reply_to_user_id: number;
		in_reply_to_user_id_str: string;
		in_reply_to_screen_name: string;
		geo: null;
		coordinates: null;
		place: {
			id: string;
			url: string;
			place_type: string;
			name: string;
			full_name: string;
			country_code: string;
			country: string;
			contained_within: [];
			bounding_box: {
				type: string;
				coordinates: [number, number][][];
			};
			attributes: {};
		};
		contributors: null;
		is_quote_status: boolean;
		retweet_count: number;
		favorite_count: number;
		favorited: boolean;
		retweeted: boolean;
		lang: string;
	};
	contributors_enabled: boolean;
	is_translator: boolean;
	is_translation_enabled: boolean;
	profile_background_color: string;
	profile_background_image_url: string;
	profile_background_image_url_https: string;
	profile_background_tile: boolean;
	profile_image_url: string;
	profile_image_url_https: string;
	profile_banner_url: string;
	profile_link_color: string;
	profile_sidebar_border_color: string;
	profile_sidebar_fill_color: string;
	profile_text_color: string;
	profile_use_background_image: boolean;
	has_extended_profile: boolean;
	default_profile: boolean;
	default_profile_image: boolean;
	following: boolean;
	follow_request_sent: boolean;
	notifications: boolean;
	translator_type: string;
}

export interface SearchError {
	error: string;
}

export interface SearchResultState {
	results?: SearchResult[];
	current?: SearchResult;
	isSearching: boolean;
}

export interface AppState {
	router: RouterState;
	search: SearchResultState;
}
