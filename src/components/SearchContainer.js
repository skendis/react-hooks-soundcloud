import React from 'react';
import { connect } from 'react-redux';
import SearchBar from './ui/SearchBar.js';
import ResultsList from './ui/ResultsList';
import ViewSelector from './ui/ViewSelector.js';
function SearchContainer({ searchResults }) {
	return (
		<div>
			<SearchBar />
			<ResultsList results={searchResults.collection ? searchResults.collection : []} />
			<ViewSelector nextPageUrl={searchResults.next_href ? searchResults.next_href : null} />
		</div>
	);
}

const mapStateToProps = ({ searchReducer }) => {
	const { searchResults } = searchReducer;

	return {
		searchResults
	};
};
export default connect(mapStateToProps)(SearchContainer);
