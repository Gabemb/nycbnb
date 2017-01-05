const Sequelize = require('../models').Sequelize;
const sequelizeConnection = require('../models').sequelizeConnection;
const Listing = require('../models').Listing;

//Listing.sync will create the Listing table
Listing.sync({force: true})
//add the following six users to the database:
.then(() => Listing.bulkCreate([
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
]))
//the following users should NOT be added to your database:
//(if your validations are setup correctly)
// .then(() => Listing.bulkCreate([
//   {firstName: '', lastName:'', email:'www.boysdontcry.com', password:''},
//   {firstName: ['Einstein', 'Albert'], lastName: []}
// ], {validate: true}))
// if everything is correct, you should only have SIX users in your database
.catch((err) => console.log(err));
