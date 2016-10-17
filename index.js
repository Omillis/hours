'use strict';
const minutes = require('@saadshahd/minutes');

module.exports = function (number) {
	return number * minutes(60);
};
