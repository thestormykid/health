var User = require('../../models/user');

module.exports = {

	landing: function (req, res) {

// 		var obj = new user ({
// 	      id : 1,
// });

// user.create({obj},function(err,result){
// 	if(err) throw err;
// 	else
// 		{   console.log(result);
// 			console.log("OKAY");
// 			res.render("landing",{userid:"1",username:"Hanu"});
// 		}

// })
		res.render("landing");
	},

	addprescription: function(req, res) {

		user.findOne({aid:req.params.id},function(err,result){
			if(err) throw err;
			else{
				console.log(result)
				res.render("addprescription",{user:result}) };
		})
	},
	list  : function(req,res){
		res.render("list.ejs");
	},
	store : function(req,res){
			res.render("index");
	},
	login : function(req,res){
	     res.render("landings",{userid:"1",username:"Hanu"});
   } ,
	landings: function(req,res){
		res.render("landings",{userid:"1",username:"Hanu"});

	},
	prescription: function(req,res){
		var id = req.params.id;
		user.findOne({aid:id},function(err,result){
			res.render("prescription",{prescription:result["prescription"],userid:req.params.id});
		})
	},
	report: function(req,res){
			var id = req.params.id;
			console.log(id);
		user.findOne({aid:id}).exec(function(err,result){
			if(err){
				console.log(err);
			}
			console.log(result);
			res.render("report",{reports:result["reports"]});
		})
	},

	Addprescription:function(req,res){
		//asuming everything in req.body
		var pres = req.body;
		console.log(pres);
		var prescription = {
			prescriptionId: pres.prescriptionId,
			doctorId: pres.doctorId,
			doctor_name: pres.doctor_name,
			hospital_name: pres.hospital_name,
			prescriptionDetails: pres.prescriptionDetails,
			disease : pres.disease,
		}
	user.findOne({aid: req.params.id}).exec(function(err,user){
		//console.log(user);
		user.prescription.push(prescription);
		user.save(function(err,user){
			if(err){
				throw err;
			}
			else{
				res.redirect("/prescription/" + req.params.id);
			}
		})
	})

	},
	addreport: function(req,res){
		res.render("addreport.ejs",{id:req.params.id});
	},

	Addreport:function(req,res){
		//asuming everything in req.body
		console.log(req.files);
		var result = req.body;
		var report = {
			reportId: req.files[0].filename,
			reportName: result.reportName,
		}
	user.findOne({aid: req.params.id}).exec(function(err,user){
		user.reports.push(report);
		user.save(function(err,user){
			if(err){
				throw err;
			}
			else{
				res.redirect("/report/"+req.params.id);
			}
		})
	})

	},

	verify: function(req,res){
		res.render("verify.ejs",{id:req.params.id});
	},

	
	verifyPost:function(req,res){
		//asuming everything in req.body
		var filename = req.files[0].filename; 
		var str = base64_encode(req.files[0].path);

		var request = require('request');

		var options = {
		uri: 'https://private-anon-2eba353011-kairos.apiary-proxy.com/recognize',
		method: 'POST',
		json: {
			"gallery_name": "Health",
			"image": str
		},
		headers: {
			'app_id': '96ba018e',
			'app_key': '7592d69340f9bc13208667783b76a9e4'
		}
		};

		request(options, function (error, response, body) {
		var maxPercent = 0;
		var subject_id = "null";

		if (("images" in body) && ("candidates" in body["images"][0]))
		{
			var data = body["images"][0]["candidates"];

			data.forEach(obj => {
			if (obj.confidence > maxPercent)
			{
				maxPercent = obj.confidence;
				subject_id = obj.subject_id;
			}
			});
		}

		if (maxPercent >= 0.5)
		{
			res.send({id: subject_id});
		}
		else
		{
			res.status(404).json({message: "No valid image found"});
		}
		});

	}
}

var fs = require('fs');

function base64_encode(file) {
	// read binary data
	var bitmap = fs.readFileSync(file);
	// convert binary data to base64 encoded string
	return new Buffer(bitmap).toString('base64');
}
