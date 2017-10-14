module.exports = {

	landing: function (req, res) {
		res.render("landing",{userid:"1",username:"Hanu"})
	},
	prescription: function(req,res){
		var id = req.params.id;
		user.findById({id},function(err,result){
			res.render("prescription",{prescription:result["prescription"]});
		})
	},
	report: function(req,res){
			var id = req.params.id;
		user.findById({id},function(err,result){
			res.render("prescription",{reports:result["reports"]});
		})
	},
	addprescription: function(req,res){
		res.render("addprescription");
	},
	Addprescription:function(req,res){
		//asuming everything in req.body
		var pres = req.body;
		var prescription = {
			prescriptionId: pres.prescriptionId,
			doctorId: pres.doctorId,
			doctor_name: pres.doctor_name,
			hospital_name: pres.hospital_name,
			prescriptionDetails: pres.prescriptionDetails,
			disease : pres.disease,
		}
	user.findOne({id: req.params.id}).exec(function(err,user){
		user.prescription.push(prescription);
		user.save(function(err,user){
			if(err){
				throw err;
			}
			else{
				res.redirect("/prescription");
			}
		})
	})

	},
	addreport: function(req,res){
		res.render("addreport");
	},

	Addreport:function(req,res){
		//asuming everything in req.body
		var result = req.body;
		var report = {
			reportId: result.reportId ,
			reportName: result.reportName
		}
	user.findOne({id: req.params.id}).exec(function(err,user){
		user.reports.push(report);
		user.save(function(err,user){
			if(err){
				throw err;
			}
			else{
				res.redirect("/report");
			}
		})
	})

	}


}
