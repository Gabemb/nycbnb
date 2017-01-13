const router = require("express").Router();



function auth  (req,res){
	 if(req.session.UserId) {
    //res.send(req.session.UserId);
    res.sendStatus(200);
  } else {
    res.sendStatus(401);
  }

}





router.route('/')
  .get(auth)

module.exports = router