import React from 'react';
import { connect } from 'react-redux';
import { fetchSearchResults } from '../store/actions/searchActions.js';
function RecentContainer({recentSearchTerms,dispatch}) {
	const handleSearch=(term)=>{
		dispatch(fetchSearchResults(term))
	}
	const searchList = recentSearchTerms.map((term,idx) => {
		return <li className="recent-search-item" key={idx} onClick={()=>{handleSearch(term)}}>{term}</li>;
	});
	return (
		<div className="recent-container">
			<h1>Recent Searches:</h1>
			<ul className="clean-list">{searchList.length?searchList:''}</ul>
		</div>
	);
}

const mapStateToProps = ({ searchReducer }) => {
	const { recentSearchTerms } = searchReducer;

	return {
		recentSearchTerms
	};
};

export default connect(mapStateToProps)(RecentContainer);
