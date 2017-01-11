const router = require("express").Router();
const User = require("../models").User


function userLogin(req,res){
	 console.log('Session:', req.session);
  var userInfo = req.body;
  User.sync()
  //Does user exists?
  .then(() => {
    return User.findOne({
      where: {
        email: userInfo.email
      }
    })
  })
  .then((user) => {
    //IF user exists, check if password is correct
    console.log(user)
    // if(user && user.password === userInfo.password) {
    //   console.log('Password is correct!')
    //   return user;
    // //ELSE IF user does not exist, create new user
    // } else if(!user) {
    //   console.log('Creating new user!');
    //   return User.create(userInfo);
    // } else {
    //   return null;
    // }
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