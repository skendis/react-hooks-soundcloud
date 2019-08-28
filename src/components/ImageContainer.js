import React from 'react';
import Player from './ui/Player.js'
import { connect } from 'react-redux';
function ImageContainer({ selectedResult }) {
	return (
		<div className="image-container flex justify-center align-center column">
			<img src={selectedResult.artwork} alt=""/>
			<Player result={selectedResult}/>
		</div>
	);
}

const mapStateToProps = ({ searchReducer }) => {
	const { selectedResult } = searchReducer;
	return {
		selectedResult
	};
};
export default connect(mapStateToProps)(ImageContainer);



