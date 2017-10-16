var mongoose = require('mongoose');

var placeSchema = mongoose.Schema({
 placeA: String,
 placeB: String,
 duration: Number
});
var place = mongoose.model('Place', placeSchema);
var pl = new place({

	placeA:"Delhi",
	placeB:"Mumbai",
	duration:2
});
place.create({pl},function(err,result){
	if(err) throw err;
})
module.exports =place; 

// 	age: Number,
// 	Sex: String,
// 	createdAt: { type: Date ,default: Date().now },
// 	prescription: [
// 		{
// 			prescriptionId: String,
// 			doctorId: String,
// 			doctor_name: String,
// 			hospital_name: String,
// 			prescriptionDetails: String,
// 			createdAt: { type: Date, default: new Date() },
// 			disease : String
// 		}
// 	],
// 	reports: [
// 		{
// 			userId:String,
// 			reportId: String,
// 			reportName: String,
// 			lab_name: String,
// 			location: String,
// 			doc_link: String,
// 			uploadedAt: { type: Date, default: new Date() }
// 		}
// 	]
