import types from '../types.js';
import soundcloudService from '../../services/soundcloudService.js';

export const setSearchResults = (data) => {
	return {
		type: types.FETCH_SONGS,
		data
	};
};
export const AddToRecentSearch = (term) => {
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
export const fetchSearchResults = (term) => {
	return (dispatch) => {
		return soundcloudService
			.getSearchResults(term)
			.then((response) => {
				dispatch(setSearchResults(response));
				dispatch(AddToRecentSearch(term));
			})
			.catch((error) => {
				throw error;
			});
	};
};
