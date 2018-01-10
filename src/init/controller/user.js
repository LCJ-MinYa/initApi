const BaseRest = require('./rest.js');

module.exports = class extends BaseRest {
	indexAction() {
		if (this.isPost) {
			this.success({
				a: 1,
				b: 2
			}, '请求用户请求!');
		}
	}
};