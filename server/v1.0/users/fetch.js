/**
 * 获取用户信息接口 
 */
var pool = require('../../services/db-services.js');
var Fetch = function(req, res) {
	var userName = req.body.username;
	pool.query('select user_id, mobile_no, user_name, cert_type, cert_no, birthdate, sex, user_img from user where mobile_no = ?', [userName], function(error, results, fields) {
		if(error) {
			res.json({
				code: -1,
				msg: error
			});
		} else {
			res.json({
				code: 0,
				result: results
			});
		}
	});
}

module.exports = Fetch;