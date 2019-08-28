import React from 'react';
import { setSelected } from '../../store/actions/searchActions.js';
import { connect } from 'react-redux';
function ResultPreview({ result, isTileView, dispatch }) {
	const setResult = () => {
		dispatch(setSelected({ url: result.uri, artwork: result.artwork_url }));
	};

	return (
		<li className="result-preview flex space-between align-center" onClick={setResult}>
			<p>{result.title}</p>
			{isTileView ? <img src={result.artwork_url} alt="" /> : ''}
		</li>
	);
}

const mapStateToProps = ({ searchReducer }) => {
	const { isTileView } = searchReducer;

	return {
		isTileView
	};
};

export default connect(mapStateToProps)(ResultPreview);
