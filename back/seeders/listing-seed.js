const Sequelize = require('../models').Sequelize;
const sequelizeConnection = require('../models').sequelizeConnection;
const Listing = require('../models').Listing;

//Listing.sync will create the Listing table
Listing.sync({force: true})
//add the following six listings to the database:
.then(() => Listing.bulkCreate([
	{
	  price: 400,
	  description: 'Spacious industrial chic apartment located in Williamsburg. Beautiful neighborhood with much to see and do!',
	  images: ['https://cdn0.vox-cdn.com/thumbor/OahREQufCXFNLVkRqqWKq3NfY5s=/0x600/cdn0.vox-cdn.com/uploads/chorus_asset/file/4800311/87347949.0.jpg'],
	  guestLimit: 4,
	  borough: 'Brooklyn',
	  availability: 1,
	  UserId: 1
	},
	{
	  price: 150,
	  description: "Two story home available on a tree-lined street in the suburbs of Staten Island. It's a quiet and safe, neighborhood. This is perfect for those who are traveling with a bigger group with kids. Garage space available!",
	  images: ['http://activerain.com/image_store/uploads/7/0/0/7/4/ar129374092547007.jpg'],
	  guestLimit: 6,
	  borough: 'Staten Island',
	  availability: 1,
	  UserId: 2
	},
	{
	  price: 350,
	  description: "One room available beginning December 14th in a spacious 3 bedroom Brooklyn apartment! The room is available until and including Dec, 31st.",
	  images: ['https://a0.muscache.com/im/pictures/103381325/6f2affad_original.jpg'],
	  guestLimit: 1,
	  borough: 'Brooklyn',
	  availability: 0,
	  UserId: 4
	},	
	{
	  price: 40,
	  description: "1 min. walk to Steinway St. Station (EMR train). 7 min. walk to Broadway Station (NW train). Take any train and get to Manhattan in 10 minutes. Approx. 20 minutes to Grand Central or Times Square. Convenient, bright and safe town. Best for travelers. 24/7 store, banks, grocery stores nearby. Great restaurants and bars on Broadway (1 block away). People from all backgrounds are welcome.",
	  images: ['https://a2.muscache.com/im/pictures/1c45cffe-a918-41ae-9cdd-66d7916f8617.jpg'],
	  guestLimit: 1,
	  borough: 'Queens',
	  availability: 1,
	  UserId: 3
	},	
	{
	  price: 70,
	  description: "My place is close to Gracie Mansion, Carl Schurz Park, Whole Foods, Fairway Market, Central Park, The Guggenheim Museum, Holy Trinity Church, Shake Shack, Barnes and Noble, Duane Reade and so much more.... You’ll love my place because of The original art, central location, the coziness, the light, and comfortable bed.... My place is good for couples, solo adventurers, and business travelers.",
	  images: ['https://a2.muscache.com/im/pictures/c2a41884-7729-481e-9292-2fcd76bf9257.jpg'],
	  guestLimit: 2,
	  borough: 'Manhattan',
	  availability: 1,
	  UserId: 6
	},	
	{
	  price: 150,
	  description: "My place is close to Empire State Building, Korea Town, Macy's, Penn Station, Herold Square, . You’ll love my place because of Walking distance from everything. My place is good for couples, solo adventurers, and business travelers.",
	  images: ['https://a2.muscache.com/im/pictures/b6157654-bc37-4402-b54d-d95ddfa1e034.jpg'],
	  guestLimit: 2,
	  borough: 'Manhattan',
	  availability: 0,
	  UserId: 5
	}
]))

.catch((err) => console.log(err));
