import React from 'react';
import ResultPreview from './ResultPreview.js';
import { connect } from 'react-redux';
function ResultsList({ isTileView,results }) {
	const list = results.map((result, idx) => {
		return <ResultPreview result={result} key={idx} />;
	});
	return <ul className={isTileView?'results-tiles':'results-list'}>{list.length ? list : ''}</ul>;
}

const mapStateToProps = ({ searchReducer }) => {
	const { isTileView } = searchReducer;

	return {
		isTileView
	};
};
export default connect(mapStateToProps)(ResultsList);
