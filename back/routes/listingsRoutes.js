 const listingRouter=require('express').Router();
const Listing=require('../models').Listing;
const User=require('../models').User;


const allListings=(req, res) => {
	Listing.findAll()
	.then((listings) => {
		res.send(listings)
	})
	.catch((err)=> console.log(err))
}

const createListing=(req, res) => {
	Listing.create({
		description: req.body.description,
		price: req.body.price,
		guestLimit: req.body.guestLimit,
		borough: req.body.borough,
		availability: req.body.availability,
		images: req.body.images
	})
	.then((listing)=> {
		res.send(listing)
	})
	.catch((err)=> console.log(err))
}

const getOneListing=(req, res) => {
	Listing.findById(req.params.id, 
		{ include: [ User ]
	})
	.then((listing)=> {
		res.send(listing)
	})
	.catch((err)=> console.log(err))
}

const editOneListing=(req, res) => {
	Listing.findById(req.params.id)
	.then((listing)=> {
		listing.update(req.body)
	})
	.then((listing)=> {
		res.send(listing)
	})
	.catch((err)=> console.log(err))
}


const deleteListing=(req, res)=> {
	Listing.findById(req.params.id)
	.then((listing)=> {
		listing.destroy()
	})
	.then(()=> {
		res.send('Listing has been deleted.')
	})
	.catch((err)=> console.log(err))
}

const listingByBoro=(req, res)=> {
	Listing.findAll({
		where: {
			borough: req.params.borough,
			availability: true
		}
	})
	.then((listings)=> {
		res.send(listings)
	})
	.catch((err)=> console.log(err))
}


listingRouter.route('/')
	.get(allListings)
	.post(createListing)

listingRouter.route('/:id')
	.get(getOneListing)
	.put(editOneListing)
	.delete(deleteListing)

listingRouter.route('/where/:borough')
	.get(listingByBoro)

module.exports=listingRouter;