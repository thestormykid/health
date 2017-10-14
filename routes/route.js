var express = require("express");
var router  = express.Router();

var routes = {
  views: {
    index: require("./views/index")
  }
}

router.get("/", routes.views.index.landing);
router.get("/doctors", routes.views.index.doctors)
// To do by sajeev or ravi.
// router.get("/login", routes.views.index.login);
// router.get("/logout", routes.views.index.login);
// router.get("/signup", routes.views.index.signup);


module.exports = router;
