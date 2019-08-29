import types from '../types.js';
import soundcloudService from '../../services/soundcloudService.js';
export const setSearchResults = (data) => {
	return {
		type: types.FETCH_SONGS,
		data
	};
};
export const getNextPage = (nextPageUrl) => {
	return (dispatch) => {
		return soundcloudService
			.getNextPage(nextPageUrl)
			.then((response) => {
				dispatch(setSearchResults(response));
			})
			.catch((error) => {
				throw error;
			});
	};
};
export const addToRecentSearch = (term) => {
	return {
		type: types.ADD_RECENT_SEARCH,
		term
	};
};
export const setSelected = (data) => {
	return {
		type: types.SET_SELECTED_RESULT,
		data
	};
};
export const switchView = (value) => {
	return {
		type: types.SWITCH_TILE_VIEW,
		value
	};
};
export const setRecentSearchTerms = (value) => {
	return {
		type: types.SET_RECENT_SEARCH_TERMS,
		value
	};
};
export const fetchSearchResults = (term, nextPageUrl = null) => {
	return (dispatch) => {
		return soundcloudService
			.getSearchResults(term, nextPageUrl)
			.then((response) => {
				dispatch(setSearchResults(response));
				if (!nextPageUrl) dispatch(addToRecentSearch(term));
			})
			.catch((error) => {
				throw error;
			});
	};
};
