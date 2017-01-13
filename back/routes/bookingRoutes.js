const router = require('express').Router();
const Booking = require('../models').Booking;
const User = require('../models').User;
const Listing = require('../models').Listing;




// ********** POST new Booking **********
const createNewBooking = (req, res) => {

	if (!req.session.UserId) return res.sendStatus(401);
	Booking.create({ 
		checkIn: req.body.checkIn,
		checkOut: req.body.checkOut,
		guests: req.body.guests, 
		UserId: req.session.UserId,
		ListingId: req.body.ListingId
	})
	.then( (newBooking) => {
		res.send(newBooking);
	})
	.catch( (err) => {
		console.log(err);
		res.sendStatus(500);
	});
};


// ********** PUT Update a Booking by id **********
const updateBooking = (req, res) => {
	Booking.update({
		checkIn: req.body.checkIn,
		checkOut: req.body.checkOut
		},{
		where: {
			id: req.params.id
		}
	})
	.then( () => {
		res.sendStatus(200);
	})
	.catch( (err) => {
		console.log(err);
		res.sendStatus(500);
	});
};

// ********** DELETE a Booking by id **********
const deleteBooking = (req, res) => {
	Booking.destroy({
		where: {
			id: req.params.id
		}
	})
	.then( () => {
		res.sendStatus(200);
	})
	.catch( (err) => {
		console.log(err);
		res.sendStatus(500);
	});
};

// ********** GET all Bookings related to a specific Listing **********
const getBookingsByListingId = (req, res) => {
	Booking.findAll({
		where: {
			ListingId: req.params.listingId
		},
		include: [User]
	})
	.then( (Bookings) => {
		res.send(Bookings);
	})
	.catch( (err) => {
		console.log(err);
		res.sendStatus(500);
	});
};

// ********** GET all Bookings related to a specific User **********
const getBookingsByUserId = (req, res) => {
	Booking.findAll({
		where: {
			UserId: req.params.userId
		},
		include: [Listing]
	})
	.then( (Bookings) => {
		res.send(Bookings);
	})
	.catch( (err) => {
		console.log(err);
		res.sendStatus(500);
	});
};






// ********** ROUTES **********
router.route('/')
	.post(createNewBooking)

router.route('/:id')
	.put(updateBooking)
	.delete(deleteBooking)

router.route('/listing/:listingId')
	.get(getBookingsByListingId)

router.route('/user/:userId')
	.get(getBookingsByUserId)




module.exports = router;