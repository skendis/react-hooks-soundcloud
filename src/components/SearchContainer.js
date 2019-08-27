import React from 'react';
import { connect } from 'react-redux';
import SearchBar from './ui/SearchBar.js';
import ResultsList from './ui/ResultsList';

function SearchContainer({ searchResults}) {
	return (
		<div>
			<SearchBar />
			<ResultsList results={searchResults.collection?searchResults.collection:[]} />
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
