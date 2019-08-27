import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchSearchResults } from '../../store/actions/searchActions.js';

const handleSubmit = (ev) => {};

function SearchBar({ dispatch }) {
	const [ searchText, setSearchText ] = useState('');
	const handleSubmit = () => {
		if (searchText) dispatch(fetchSearchResults(searchText));
	};
	const handleChange = (event) => {
		setSearchText(event.target.value);
	};
	return (
		<div>
			<input type="text" name="" id="" value={searchText} onChange={handleChange} />
			<button onClick={handleSubmit}>GO</button>
		</div>
	);
}

export default connect()(SearchBar);
