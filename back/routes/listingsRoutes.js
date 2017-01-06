const listingRouter=require('express').Router();
const Listing=require('../models').Listing;

const allListings=(req, res) => {
	Listing.findAll()
	.then((listings) => {
		res.send(listings)
	})
}

const createListing=(req, res) => {
	Listing.create(req.body)
	.then((listing)=> {
		res.send(listing)
	})
}

const getOneListing=(req, res) => {
	Listing.findById(req.params.id)
	.then((listing)=> {
		res.send(listing)
	})
}

const editOneListing=(req, res) => {
	Listing.findById(req.params.id)
	.then((listing)=> {
		listing.update(req.body)
	})
	.then((listing)=> {
		res.send(listing)
	})
}

const deleteListing=(req, res)=> {
	Listing.findById(req.params.id)
	.then((listing)=> {
		listing.destroy()
	})
	.then(()=> {
		res.send('Listing has been deleted.')
	})
}

const listingByBoro=(req, res)=> {
	Listing.findAll({
		where: {
			borough: req.params.borough
		}
	})
	.then((listings)=> {
		res.send(listings)
	})
}


listingRouter.route('/')
	.get(allListings)
	.post(createListing)

listingRouter.route('/:id')
	.get(getOneListing)
	.put(editOneListing)
	.delete(deleteListing)

listingRouter.route('/:borough')
	.get(listingByBoro)

module.exports=listingRouter;