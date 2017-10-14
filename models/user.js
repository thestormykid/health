var mongoose = require('mongoose');

var userSchema = mongoose.schema({
	name: String,
	age: Number,
	Sex: String,
	createdAt: { type: Date default: Date().now },
	prescription: [
		{
			prescriptionId: String,
			doctorId: String,
			doctor_name: String,
			hospital_name: String,
			prescriptionDetails: String,
			createdAt: { type: Date default: Date().now }
			diseases : []
		}
	],
	reports: [
		{
			reportId: String,
			reportName: String,
			uploadedAt: { type: Date default: Date().now }
		}
	]

});

module.exports = mongoose.model('User', userSchema);
