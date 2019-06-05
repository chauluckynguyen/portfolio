var teqTonic = require("./index");

module.exports = function(eyeglass, sass) {
	return {
		sassDir: teqTonic.includePaths[0]
	};
};
