const BaseRest = require('./rest.js');

module.exports = class extends BaseRest {
	async indexAction() {
		if (this.isGet) {
			const num = think.mongo('RoomList');
			const data = await num.find();
			console.log(data);
			this.success({
				a: 1,
				b: 2
			}, '请求用户请求!');
		}
	}
};