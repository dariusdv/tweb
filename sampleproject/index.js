module.exports = {
	forEach(arr, fn) {
		for (let elem of arr) {
			fn(elem);
		}
	}
};
