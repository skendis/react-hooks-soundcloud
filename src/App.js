import React, { useEffect } from 'react';
import ImageContainer from './components/ImageContainer.js';
import RecentContainer from './components/RecentContainer.js';
import SearchContainer from './components/SearchContainer.js';
import { connect } from 'react-redux';
import storageService from './services/storageService.js';
import { setRecentSearchTerms } from './store/actions/searchActions.js';
import './styles/style.scss';
function App({ dispatch }) {
	useEffect(() => {
		console.log('loaded');
		const searchTerms = storageService.load('recentSearchTerms');
		if (searchTerms) dispatch(setRecentSearchTerms(searchTerms));
		else dispatch(setRecentSearchTerms([]));
  }, []);
  
	return (
		<div className="App">
			<SearchContainer />
			<ImageContainer />
			<RecentContainer />
		</div>
	);
}

const mapStateToProps = ({ searchReducer }) => {
	const { recentSearchTerms } = searchReducer;

	return {
		recentSearchTerms
	};
};

export default connect(mapStateToProps)(App);
