const expect = require('chai').expect;
const supertest = require('supertest');
const moment = require('moment');
const server = require('../back/server/server.js');
const Booking = require('../back/models/').Booking;

describe('Booking api route tests', () => {

  //Some dummy data for the tests
	let Bookings = [
		{
      checkIn: moment('2017-01-04').format('MM/DD/YYYY'),
      checkOut: moment('2017-01-10').format('MM/DD/YYYY'),
      UserId: 3,
      ListingId: 1
    },
    {
      checkIn: moment('2017-02-10').format('MM/DD/YYYY'),
      checkOut: moment('2017-02-15').format('MM/DD/YYYY'),
      UserId: 2,
      ListingId: 1
    },
    {
			checkIn: moment('2017-01-11').format('MM/DD/YYYY'),
      checkOut: moment('2017-01-13').format('MM/DD/YYYY'),
      UserId: 3,
      ListingId: 2
		},
		{
			checkIn: moment('2017-03-22').format('MM/DD/YYYY'),
      checkOut: moment('2017-03-28').format('MM/DD/YYYY'),
      UserId: 1,
      ListingId: 2
		}
	];

	before(() => {
		return Booking.sync({force: true})
		.then(() => Booking.bulkCreate(Bookings))
		.catch((err) => console.log('DB Err!', err));
	});

  //GET Tests
  it(`'/api/booking/listing/:listingId' should return all Bookings related to a specific Listing'`, (done) => {
    supertest(server)
      .get('/api/booking/listing/2')
      .end((err, res) => {
        expect(res.body.length).equal(2);
        expect(res.body[0].UserId).equal(Bookings[2].UserId);
        expect(res.body[0].checkIn).equal('01/11/2017');
        expect(res.body[1].UserId).equal(Bookings[3].UserId);
        expect(res.body[1].checkOut).equal('03/28/2017');
        done();
      })
  });

  it(`'/api/booking/user/:userId' should return all of an individual's bookings'`, (done) => {
    supertest(server)
      .get('/api/booking/user/3')
      .end((err, res) => {
        expect(res.body.length).equal(2);
        expect(res.body[0].ListingId).equal(Bookings[0].ListingId);
        expect(res.body[0].checkIn).equal('01/04/2017');
        expect(res.body[1].ListingId).equal(Bookings[2].ListingId);
        expect(res.body[1].checkOut).equal('01/13/2017');
        done();
      })
  });

  //POST Tests
  it(`'/api/booking' should create a new Booking entry in our database'`, (done) => {
    supertest(server)
      .post('/api/booking')
      .send({
        checkIn: moment(new Date(2017, 4, 13)).format('MM/DD/YYYY'),
        checkOut: moment('2017-05-22').format('MM/DD/YYYY'),
        UserId: 1,
        ListingId: 2
      })
      .end((err, res) => {
        expect(res.body.checkIn).equal('05/13/2017');
        expect(res.body.checkOut).equal('05/22/2017');
        expect(res.body.UserId).equal(1);
        expect(res.body.ListingId).equal(2);
        done();
      })
  });

  //PUT Tests
  it(`'/api/booking/:id' should return the updated booking'`, (done) => {
    supertest(server)
      .put('/api/booking/3')
      .send({
        checkIn: moment('2017-01-13').format('MM/DD/YYYY'),
        checkOut: moment('2017-01-18').format('MM/DD/YYYY')
      })
      .end((err, res) => {
        expect(res.status).equal(200);
        done();
      })
  });

  //DELETE Tests
  it(`'/api/booking/:id' should return a 200 status after successful deletion'`, (done) => {
    supertest(server)
      .delete('/api/booking/4')
      .end((err, res) => {
        expect(res.status).equal(200);
        done();
      })
  });
});