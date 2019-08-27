export default {
	store,
	load
};

const KEY = 'SOUNDCLOUD_APP_DATA'

//store to localStorage by key
function store(data) {
	localStorage[KEY] = JSON.stringify(data);
}

//load from localStorage by key
function load() {
	var str = localStorage[KEY] || 'null';
	return JSON.parse(str);
}
