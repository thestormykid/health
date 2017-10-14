var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	name: String,
	age: Number,
	Sex: String,
	createdAt: { type: Date,  default: new Date().now },
	prescription: [
		{
			prescriptionId: String,
			doctorId: String,
			doctor_name: String,
			hospital_name: String,
			prescriptionDetails: String,
			createdAt: { type: Date,  default: new Date().now },
			diseases : []
		}
	],
	reports: [
		{
			reportId: String,
			reportName: String,
			uploadedAt: { type: Date, default: new Date().now }
		}
	]

});

module.exports = mongoose.model('User', userSchema);
