import React, { useState } from 'react';
import Player from './ui/Player.js';
import { connect } from 'react-redux';
import placeHolder from '../assets/placeholder.png'
function ImageContainer({ selectedResult }) {
	const [ resultToPlay, setresultToPlay ] = useState('');
	return (
		<div className="image-container flex justify-center align-center column">
			<div className="art-work">
				{selectedResult.url?<img src={selectedResult.artwork?selectedResult.artwork:placeHolder} alt="albom-cover" 
					onClick={() => setresultToPlay(selectedResult)} />:''}
				<Player result={resultToPlay} />
			</div>
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
