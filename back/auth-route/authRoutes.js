const router = require("express").Router();



function auth  (req,res){
	 if(req.session.UserId) {
    res.send(req.session.UserId);
  } else {
    res.sendStatus(401);
  }

}





router.route('/')
  .get(auth)

module.exports = router