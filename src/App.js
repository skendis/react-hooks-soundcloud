import React, { useEffect } from 'react';
import ImageContainer from './components/ImageContainer.js';
import RecentContainer from './components/RecentContainer.js';
import SearchContainer from './components/SearchContainer.js';
import { connect } from 'react-redux';
import storageService from './services/storageService.js';
import { setRecentSearchTerms, switchView } from './store/actions/searchActions.js';
import './styles/style.scss';
function App({ dispatch }) {
	useEffect(
		() => {
			const searchTerms = storageService.load('recentSearchTerms');
			const viewPref = storageService.load('viewPref');
			dispatch(switchView(viewPref));

			if (searchTerms) dispatch(setRecentSearchTerms(searchTerms));
			else dispatch(setRecentSearchTerms([]));
		},
		[ dispatch ]
	);

	return (
		<div className="App">
			<SearchContainer />
			<ImageContainer />
			<RecentContainer />
		</div>
	);
}

export default connect()(App);
