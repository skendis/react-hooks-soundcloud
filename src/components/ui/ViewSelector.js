import React from 'react';
import { switchView, getNextPage } from '../../store/actions/searchActions.js';

import { connect } from 'react-redux';

function ViewSelector({ dispatch, nextPageUrl ,isTileView}) {
	const setTileView = () => {
		dispatch(switchView(true));
	};
	const setListView = () => {
		dispatch(switchView(false));
	};
	const nextPage = () => {
		dispatch(getNextPage(nextPageUrl));
	};

	return (
		<div className="view-selector flex space-between">
			{nextPageUrl ? (
				<button onClick={nextPage}>
					<i className="fas fa-arrow-right" />
				</button>
			) : (
				''
			)}
			<div>
				<button onClick={setTileView} className={isTileView?'selected':''}>
					<i className="fas fa-th-large" />
				</button>
				<button onClick={setListView} className={!isTileView?'selected':''}>
					<i className="fas fa-list" />
				</button>
			</div>
		</div>
	);
}
const mapStateToProps = ({ searchReducer }) => {
	const { isTileView } = searchReducer;

	return {
		isTileView
	};
};
export default connect(mapStateToProps)(ViewSelector);
