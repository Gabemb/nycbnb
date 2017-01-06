const router = require('express').Router();
const User = require('../models').User;




// ********** GET all Users **********
function getAllUsers(req, res) {
	User.findAll({})
		.then(function(data) {
			res.send(data)
		})
		.catch(function(error){
			console.log("ERROR returning all Users in database:", error);
			res.sendStatus(500);
		})
}


// ********** GET an user by id **********
function getUserById(req, res) {
	User.findById(req.params.id)
		.then(function(user) {
			res.send(user)
		})
}



// ********** DELETE a User by id **********
function deleteUser(req, res) {
	User.findById(req.params.id)
	.then((user)=> {
		user.destroy()
	})
	.then(()=> {
		res.send('User has been deleted')
	})
}

// ********** POST new Use **********
function postNewUser(req, res) {
	Users.create({
		firstName: req.body.name,
		lastname: req.body.lastname,
		email: req.body.email,
		password:req.body.password

	})
	.then(function(Users) {
		console.log('REQ BODY:', req.body);
		res.send('ahh shit, you/ve added a new USER')
	})
}

// ********** ROUTES **********
router.route('/')
	.get(getAllUsers)
	.post(postNewUser)

router.route('/username/:firstName')
	.get(getUserById)
	.delete(deleteUser)




module.exports = router;