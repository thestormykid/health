var express = require("express");
var router  = express.Router();

var routes = {
  views: {
    index: require("./views/index")
  }
}

router.get("/", routes.views.index.landing);
router.get("/doctors/:id", routes.views.index.doctors)

router.get("/login",routes.views.index.login);
router.get("/store", routes.views.index.store);
router.get("/list", routes.views.index.list);

//Prescription List:
router.get("/prescription/:id", routes.views.index.prescription);
router.get("/report/:id", routes.views.index.report);

//Add Prescrription
router.get("/addprescription/:id", routes.views.index.addprescription);
router.post("/addprescription/:id", routes.views.index.Addprescription);
router.get("/addreport/:id", routes.views.index.addreport);
router.post("/addreport/:id",upload.any(),routes.views.index.Addreport);

//Verify Image
router.get("/verify/:id", routes.views.index.verify);


module.exports = router;
