import axios from 'axios';
const CLIENT_ID = 'ggX0UomnLs0VmW7qZnCzw';
const ENDPOINT = 'https://api.soundcloud.com';
const LIMIT = 6;
export default {
	getSearchResults
};

async function getSearchResults(term) {
	const res = await _getRequest(`${ENDPOINT}/tracks?client_id=${CLIENT_ID}&q=${term}&limit=${LIMIT}&linked_partitioning=1`);
	return res;
}

async function _getRequest(url) {
	const res = await axios.get(url);
	return res.data;
}
