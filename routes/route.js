var express = require("express");
var router  = express.Router();

var routes = {
  views: {
    index: require("./views/index")
  }
}

router.get("/", routes.views.index.landing);
//Prescription List:
router.get("/prescription/:id", routes.views.index.prescription);
router.get("/report/:id", routes.views.index.report);

//Add Prescrription
router.get("/addprescription", routes.views.index.addprescription);
router.post("/addprescription", routes.views.index.Addprescription);
router.get("/addreport", routes.views.index.addreport);
router.post("/addreport", routes.views.index.Addreport);


// To do by sajeev or ravi.
// router.get("/login", routes.views.index.login);
// router.get("/logout", routes.views.index.login);
// router.get("/signup", routes.views.index.signup);


module.exports = router;
