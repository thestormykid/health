var express = require("express");
var router  = express.Router();

var routes = {
  views: {
    index: require("./views/index")
  }
}

router.get("/", routes.views.index.landing);
router.get("/prescription", routes.views.index.prescription);
router.post("/prescription", routes.views.index.Prescription);

// To do by sajeev or ravi.
// router.get("/login", routes.views.index.login);
// router.get("/logout", routes.views.index.login);
// router.get("/signup", routes.views.index.signup);


module.exports = router;
