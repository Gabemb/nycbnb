var expect = require('chai').expect;
var supertest = require('supertest');
var server = require('../back/server/server.js');
var Listing = require('../back/models/').Listing;

describe('Listing tests', () => {

	var listings = [
		{
			price: 400,
			description: 'Spacious industrial chic apartment located in Williamsburg. Beautiful neighborhood with much to see and do!',
			images: ['https://cdn0.vox-cdn.com/thumbor/OahREQufCXFNLVkRqqWKq3NfY5s=/0x600/cdn0.vox-cdn.com/uploads/chorus_asset/file/4800311/87347949.0.jpg'],
			guestLimit: 4,
			borough: 'Brooklyn',
			availability: [new Date(2017, 0, 1), new Date(2017, 1, 1)]
		},
		{
			price: 150,
			description: "Two story home available on a tree-lined street in the suburbs of Staten Island. It's a quiet and safe, neighborhood. This is perfect for those who are traveling with a bigger group with kids. Garage space available!",
			images: ['http://activerain.com/image_store/uploads/7/0/0/7/4/ar129374092547007.jpg'],
			guestLimit: 6,
			borough: 'Staten Island',
			availability: [new Date(2017, 2, 10), new Date(2017, 6, 18)]
		}
	];

	before(() => {
		return Listing.sync({force: true})
		.then(() => Listing.bulkCreate(listings))
		.catch((err) => console.log('DB Err!', err));
	});


  it(`'/listing' should return all listings'`, (done) => {
    supertest(server)
      .get('/listing')
      .end((err, res) => {
        expect(res.body.length).equal(2);
        expect(res.body[0].images).equal(listings[0].images[0]);
        expect(res.body[0].price).equal(listings[0].price);
        expect(res.body[0].borough).equal(listings[0].borough);
        expect(res.body[1].images).equal(listings[1].images[0]);
        expect(res.body[1].price).equal(listings[1].price);
        expect(res.body[1].borough).equal(listings[1].borough);
        done();
      })
  });

  it(`'/listing/:id' should return an individual listing'`, (done) => {
    supertest(server)
      .get('/listing/' + 1)
      .end((err, res) => {
        expect(res.body.length).equal(1);
        expect(res.body[0].images).equal(listings[0].images);
        expect(res.body[0].price).equal(listings[0].price);
        expect(res.body[0].borough).equal(listings[0].borough);
        expect(res.body[0].images).equal(listings[0].images[0]);
        expect(res.body[0].price).equal(listings[0].price);
        expect(res.body[0].guestLimit).equal(listings[0].guestLimit)
        expect(res.body[0].borough).equal(listings[0].borough);
        done();
      })
  });

  it(`'/listing' should create a new listing'`, (done) => {
    supertest(server)
      .post('/listing')
      .send({
      	price: 180,
		description: "Small apartment located in Hells Kitchen. Walking distance to Times Square and all major transit lines. Perfect for a duo traveling to the city!",
		images: ['http://activerain.com/image_store/uploads/7/0/0/7/4/ar129374092547007.jpg'],
		guestLimit: 2,
		borough: 'Manhattan',
		availability: [new Date(2017, 2, 10), new Date(2017, 6, 18)]
      })
      .end((err, res) => {
        expect(res.body.images).equal(['http://activerain.com/image_store/uploads/7/0/0/7/4/ar129374092547007.jpg']);
        expect(res.body.description).equal("Small apartment located in Hells Kitchen. Walking distance to Times Square and all major transit lines. Perfect for a duo traveling to the city!");
        expect(res.body.price).equal(180);
        expect(res.body.borough).equal('Manhattan');
        expect(res.body.guestLimit).equal(2)
        done();
      })
  });

  it(`'/listing/:borough' should return all listings of that borough'`, (done) => {
    supertest(server)
      .get('/listing/statenisland')
      .end((err, res) => {
        expect(res.body.length).equal(1);
        expect(res.body[1].images).equal(listings[1].images[0]);
        expect(res.body[1].price).equal(listings[1].price);
        expect(res.body[1].borough).equal(listings[1].borough);
        done();
      })
  });
});