import types from '../types.js';

const initialState = {
	recentSearchTerms: [],
	searchResults: {},
	isTileView: true,
	selectedResult: {}
};

const searchReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.FETCH_SONGS:
			return { ...state, searchResults: action.data };
		case types.SWITCH_TILE_VIEW:
			return { ...state, isTileView: action.value };
		case types.SET_SELECTED_RESULT:
			return { ...state, selectedResult: action.data };
		case types.ADD_RECENT_SEARCH:
			return {
				...state,
				recentSearchTerms: [ ...state.recentSearchTerms, action.term ]
			};
		default:
			return state;
	}
};

export default searchReducer;