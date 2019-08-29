export default {
	store,
	load
};


//store to localStorage by key
function store(data,key) {
	localStorage[key] = JSON.stringify(data);
}

//load from localStorage by key
function load(key) {
	var str = localStorage[key] || 'null';
	return JSON.parse(str);
}
