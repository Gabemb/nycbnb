const router = require("express").Router();
const User = require("../models").User

//handles the initial log in.
function userLogin(req,res){
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
      req.session.UserId = user.id;
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


//one more route on enter of app ====> check if req.session.id exists
//if it does find user by id and send back data
//if it doesn't send back a falsey value


router.route('/')
  .post(userLogin)

module.exports = router