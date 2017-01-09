const Sequelize = require('../models').Sequelize;
const sequelizeConnection = require('../models').sequelizeConnection;
const moment = require('moment');
const Booking = require('../models').Booking;

//Booking.sync will create the Booking table
Booking.sync({force: true})
//add the following five bookings to the database:
.then(() => Booking.bulkCreate([
	{
	    checkIn: moment(new Date(2017, 0, 1)).format('MM/DD/YYYY'),
	    checkOut: moment(new Date(2017, 0, 12)).format('MM/DD/YYYY'), 
	    UserId: 1,
	    ListingId: 1
	},
	{
	   	checkIn: moment(new Date(2017, 2, 10)).format('MM/DD/YYYY'),
	    checkOut: moment(new Date(2017, 2, 18)).format('MM/DD/YYYY'), 
	    UserId: 2,
	    ListingId: 2
	},
	{
	   	checkIn: moment(new Date(2017, 3, 10)).format('MM/DD/YYYY'),
	    checkOut: moment(new Date(2017, 3, 14)).format('MM/DD/YYYY'), 
	    UserId: 6,
	    ListingId: 5
	},
	{
	   	checkIn: moment(new Date(2017, 7, 1)).format('MM/DD/YYYY'),
	    checkOut: moment(new Date(2017, 7, 4)).format('MM/DD/YYYY'), 
	    UserId: 4,
	    ListingId: 1
	},
	{
	   	checkIn: moment(new Date(2017, 12, 1)).format('MM/DD/YYYY'),
	    checkOut: moment(new Date(2017, 12, 7)).format('MM/DD/YYYY'), 
	    UserId: 2,
	    ListingId: 5
	},
]))

.catch((err) => console.log(err));
