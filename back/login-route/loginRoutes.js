const router = require("express").Router();
const User = require("../models").User


function userLogin(req,res){
  //  console.log("query:", req.query);
  //  console.log("body:", req.body);
	 // console.log('Session:', req.session);
  var userInfo = req.body;
  User.sync()
  .then(() => {
    return User.findOne({
      where: {
        email: userInfo.email,
        password: userInfo.password
      }
    })
  })
  .then((user) => {
    if(user) {
      req.session.email = user.email;
      req.session.save();
      console.log('Updated session?', req.session);
      res.send(user);
    } else {
      res.send('Incorrect password!');
    }
  })
  .catch((err) => {
    console.log(err);
    res.sendStatus(500);
  })
};





router.route('/')
  .post(userLogin)

module.exports = router