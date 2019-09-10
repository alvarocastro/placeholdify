const placeholdify = function (format, ...values) {
	return format.replace(/{(\d+)}/g, (match, number) => {
		return values[number] === undefined ? match : values[number];
	});
};

module.exports = placeholdify;
