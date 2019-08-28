import React from 'react';
import ResultPreview from './ResultPreview.js';

function ResultsList({ results}) {
	const list = results.map((result,idx) => {
		return <ResultPreview result={result} key={idx} />;
	});
	return <ol>{list.length ? list : 'none'}</ol>;
}
export default ResultsList;
