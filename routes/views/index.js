var User = require('../../models/user');

module.exports = {

	landing: function (req, res) {
		res.render("landing")
	},

	health: function (req, res) {
		res.send("aksjdhaskdhaskjd");
	},
	doctors: function(req, res) {
		res.render("doctors");
	}

}
