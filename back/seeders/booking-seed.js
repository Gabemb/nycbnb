const Sequelize = require('../models').Sequelize;
const sequelizeConnection = require('../models').sequelizeConnection;
const Booking = require('../models').Booking;

//Booking.sync will create the Booking table
Booking.sync({force: true})
//add the following three bookings to the database:
.then(() => Booking.bulkCreate([
	{
	  
	    checkIn: [new Date(2017, 0, 1), new Date(2017, 0, 12)],
	    checkOut: 
	    UserId: 1,
	    ListingId: 1
	},
	{
	   
	    checkIn: [new Date(2017, 2, 10), new Date(2017, 2, 18)],
	    checkOut: 
	    UserId: 2,
	    ListinId: 2
	},
	{
	   
	    checkIn: [new Date(2017, 3, 10), new Date(2017, 3, 14)],
	    checkOut: 
	    UserId: 6,
	    ListingId: 5
	}
]))

.catch((err) => console.log(err));
