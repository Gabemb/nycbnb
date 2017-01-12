const router = require("express").Router();



function auth  (req,res){
	console.log('session', req.session);
	 if(req.session.username) {
    res.send(req.session.username);
  } else {
    res.send(null);
  }

}





router.route('/')
  .get(auth)

module.exports = router