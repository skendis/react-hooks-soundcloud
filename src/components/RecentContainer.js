import React from 'react';
import { connect } from 'react-redux';
function RecentContainer({recentSearchTerms}) {
	const searchList = recentSearchTerms.map((term,idx) => {
		return <li key={idx}>{term}</li>;
	});
	return (
		<div className="recent-container">
			<h1>Recent Searches:</h1>
			<ul className="clean-list">{searchList.length?searchList:"none"}</ul>
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
