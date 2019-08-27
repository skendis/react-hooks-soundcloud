import React from 'react';
import { setSelected } from '../../store/actions/searchActions.js';
import { connect } from 'react-redux';
function ResultPreview({ result, isTileView, dispatch }) {
	const setResult = () => {
		// event.stopPropagation()
		// const resultObj = {
		// 	id,
		// 	uri,
		// 	artwork_url
		// }=result
		dispatch(setSelected({ url: result.uri, artwork: result.artwork_url }));
	};

	return (
		<li>
			<p onClick={setResult}>{result.title}</p>
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
