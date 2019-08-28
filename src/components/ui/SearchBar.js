import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchSearchResults } from '../../store/actions/searchActions.js';

function SearchBar({ dispatch }) {
	const [ searchText, setSearchText ] = useState('');
	const handleSubmit = () => {
		if (searchText) dispatch(fetchSearchResults(searchText));
	};
	const handleChange = (event) => {
		setSearchText(event.target.value);
	};
	return (
		<div className="search-bar">
			<input type="text" className="search-input" placeholder="search" value={searchText} onChange={handleChange} />
			<button className="primary-btn" onClick={handleSubmit}>GO</button>
		</div>
	);
}

export default connect()(SearchBar);
