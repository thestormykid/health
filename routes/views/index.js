module.exports = {

	landing: function (req, res) {
		res.render("landing")
	},
	prescription: function(req,res){
		res.render("prescription",{userid:"1",username:"Hanu"});
	},
	Prescription:function(req,res){
		res.send(req.body);
	}

}
