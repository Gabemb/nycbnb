const router = require('express').Router();
const User = require('../models').User;




// ********** GET all Users **********
function getAllUsers(req, res) {
	User.findAll()
		.then(function(data) {
			res.send(data)
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
	Users.create(req.body)
	.then((user) => {
		res.send(user)
	})
}

// ********** ROUTES **********
router.route('/')
	.get(getAllUsers)
	.post(postNewUser)

router.route('/:id')
	.get(getUserById)
	.delete(deleteUser)




module.exports = router;