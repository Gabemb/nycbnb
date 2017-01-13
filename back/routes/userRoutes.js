const router = require('express').Router();
// const User = require('../models/user');

const Listing = require('../models').Listing;
const Booking = require('../models').Booking;
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
	User.findById(req.params.id, {
		include: [Listing, Booking]
	})
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

// ********** POST new User **********
function postNewUser(req, res) {
	console.log(req.body)
	User.create({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		password:req.body.password

	})
	.then(function(newUser) {
		console.log(newUser)

		res.send(newUser)
	})
}

const fetchUser = (req, res) => {
	if (!req.session.UserId) return res.sendStatus(401);
	User.findById(req.session.UserId, {
		include: [Listing, {
			model: Booking,
			include: [Listing]
		}]
	})
	.then( (user) => {
		res.send(user);
	})
	.catch( (err) => {
		console.log("Problem returning logged in user info: ", err);
		res.sendStatus(500);
	})

}


// ********** ROUTES **********
router.route('/')
	.get(getAllUsers)
	.post(postNewUser)

router.route('/userId/:id')
	.get(getUserById)
	.delete(deleteUser)

router.route('/userprofile')
	.get(fetchUser)




module.exports = router;