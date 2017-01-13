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
	},
		{
	  price: 150,
	  description: "My place is my glam pad. NYC is full of hidden treasures and my place is definitely one of them. On the out skirts of the city for some peace, yet a short train ride from all the noise, culture and fun your little heart desires.",
	  images: ['https://a2.muscache.com/im/pictures/55884155-493c-411a-8e12-c09d03ccc8e4.jpg?aki_policy=xx_large'],
	  guestLimit: 2,
	  borough: 'Bronx',
	  availability: 1,
	  UserId: 7
	},
		{
	  price: 130,
	  description: "This is a wonderful art-filled apartment in a historic landmark building that houses The Bronx Documentary Center, an arts and cultural center, on the lower floors. The apartment is very large (1000 sf) and has enormous windows in every room. A great space to relax or get work done. There is a large outdoor patio on the ground floor that you can use to relax.",
	  images: ['https://a2.muscache.com/im/pictures/b6157654-bc37-4402-b54d-d95ddfa1e034.jpg'],
	  guestLimit: 4,
	  borough: 'Bronx',
	  availability: 1,
	  UserId: 8
	},
		{
	  price: 115,
	  description: "This charming pre-war apartment building is located in the north Bronx, within walking distance to the Bronx zoo and NY Botanical Garden. One and a half blocks from the subway, 30 minutes to Manhattan. Close to many shops and grocery stores.",
	  images: ['https://a2.muscache.com/im/pictures/7a7b1af3-922d-42c6-ac75-fb59c377ada8.jpg?aki_policy=xx_large'],
	  guestLimit: 4,
	  borough: 'Bronx',
	  availability: 1,
	  UserId: 9
	},
		{
	  price: 150,
	  description: "Beautiful 2br apartment, sleeps 5+. Near Yankee Stadium, with easy access to Manhattan and rest of NYC via the 2/4/5/B/D subways. Facing Franz Siegel park, with nearby grocery store, bars, and Starbucks. 20 mins to Bronx Zoo and NY Botanical Garden.",
	  images: ['https://a2.muscache.com/im/pictures/ce0823db-8393-4af4-b6e0-85f0ccb0f790.jpg?aki_policy=x_large'],
	  guestLimit: 4,
	  borough: 'Bronx',
	  availability: 1,
	  UserId: 10
	},
		{
	  price: 120,
	  description: "Come and stay in our unique and stylishly decorated loft with rehearsal studio. Great for travelers, musicians or traveling musicians. Located in the South Bronx literally steps away from Manhattan and convenient subway access to the entire city. Great roof deck, gym in building and cafe/bar on premises make it a must-stay.",
	  images: ['https://a2.muscache.com/im/pictures/c71896f0-20d2-4931-a07c-98a5843758a2.jpg?aki_policy=x_large'],
	  guestLimit: 2,
	  borough: 'Bronx',
	  availability: 1,
	  UserId: 11
	},
		{
	  price: 140,
	  description: "Large open loft space, sun filled with high ceilings and hardwood floors. The clock tower building was an old piano factory so its really beautiful and very true New York loft-style living. There is a fab roofdeck and gym and laundry in the building. The area of South Bronx itself is very quiet, without a lot of people, which I've always found to be nice after long day amongst the hustle and bustle of New York.",
	  images: ['https://a2.muscache.com/im/pictures/57724073/2b56d206_original.jpg?aki_policy=xx_large'],
	  guestLimit: 3,
	  borough: 'Bronx',
	  availability: 1,
	  UserId: 12
	},
		{
	  price: 130,
	  description: "Explore Brooklyn from our charming, bright, townhouse apartment in the hippest part of Bed-Stuy. Perfectly situated at the border of North and South Brooklyn where Williamsburg, Clinton Hill and Bed-Stuy meet. We have two very nice cats that love to cuddle or chill on their own. We may ask you to feed them when we are away (price will reflect this).",
	  images: ['https://a2.muscache.com/im/pictures/f4cd516d-9457-4a00-803d-1f9b049bb156.jpg?aki_policy=x_large'],
	  guestLimit: 4,
	  borough: 'Brooklyn',
	  availability: 1,
	  UserId: 13
	},
		{
	  price: 285,
	  description: "Located in the heart of the East Village, stay in comfort in our 24hr doorman building and feel like a local immersed in one of NYC's most lively and authentic neighborhoods. With several coffee shops a block away, grab a coffee and take a quick 10 min walk to Union Square. Or if walking isn't your thing, the L train is on our block and just 2 stops from all major lines or 1 stop east to Williamsburg. Some area highlights include Momofuko Noodle and Milk Bar, Tompkins Square Park and Katz Deli.",
	  images: ['https://a2.muscache.com/im/pictures/3ae93c6c-ac7b-460e-b25a-a10bcc7b7e01.jpg?aki_policy=xx_large'],
	  guestLimit: 5,
	  borough: 'Manhattan',
	  availability: 1,
	  UserId: 14
	},
		{
	  price: 125,
	  description: "This listing is for a large one bedroom apartment with an office and spacious private roof. The apartment has a rare sense of privacy for NYC as it is the only apartment in the building. It is a 2nd floor apartment with a fully equipped kitchen that includes an oven and dishwasher. There is an extremely comfortable daybed in the living room that is the width of a king sized bed when expanded. A third person can sleep on the large, L-shaped couch if needed.",
	  images: ['https://a2.muscache.com/im/pictures/9399687d-9acd-47f4-9e4a-c12d92f8fd93.jpg?aki_policy=xx_large'],
	  guestLimit: 2,
	  borough: 'Brooklyn',
	  availability: 1,
	  UserId: 15
	},
		{
	  price: 200,
	  description: "First floor of a bright and beautiful Brooklyn townhouse, 1-Bedroom, French vibes, great light during the day and super cozy at night. Big kitchen and nice dining area (pics still to come). Right off the JMZ train, 15 minutes to Manhattan.",
	  images: ['httphttps://a2.muscache.com/im/pictures/345933e2-9bbc-4c57-9ac5-fa8792bafc2f.jpg?aki_policy=xx_large'],
	  guestLimit: 4,
	  borough: 'Brooklyn',
	  availability: 1,
	  UserId: 13
	},
		{
	  price: 250,
	  description: "My true one-bedroom apartment in an art deco elevator building is spacious and charming! Located in the East Village, and a few blocks from SoHo and the Lower East Side, it is situated in one of the most exciting neighborhoods in Manhattan.",
	  images: ['https://a2.muscache.com/im/pictures/50390014/1352c0fa_original.jpg?aki_policy=xx_large'],
	  guestLimit: 2,
	  borough: 'Manhattan',
	  availability: 1,
	  UserId: 5
	},
		{
	  price: 285,
	  description: "Large, open and airy loft on the 5th floor in a former factory building. It has one bedroom with a queen-sized bed, a large kitchen, bath with shower, television, wireless and views over Fort Greene and the Brooklyn Navy Yard.",
	  images: ['https://a2.muscache.com/im/pictures/b6157654-bc37-4402-b54d-d95ddfa1e034.jpg'],
	  guestLimit: 2,
	  borough: 'Brooklyn',
	  availability: 1,
	  UserId: 9
	},
		{
	  price: 150,
	  description: "Come stay at our super sunny loft in the heart of the LES! We are so excited to offer our bright, large 1 bedroom apartment to guests. Its the perfect location to explore all the restaurants and galleries that the neighborhood has to offer. Our Loft features a fully equipped kitchen, true dining room, large bedroom with king bed and pull out sofa, perfect for a couple or family!",
	  images: ['https://a2.muscache.com/im/pictures/92cddd7a-e1bc-4178-9228-596d15136d62.jpg?aki_policy=xx_large'],
	  guestLimit: 2,
	  borough: 'Manhattan',
	  availability: 1,
	  UserId: 1
	},
		{
	  price: 119,
	  description: "Sunny Spacious 1 Bedroom Apartment in the heart of Williamsburg, super close to restaurants, bars and nightlife. Centrally located to subways with quick transportation into Manhattan, Queens and South Brooklyn.",
	  images: ['https://a2.muscache.com/im/pictures/36a9f0fe-bcab-4c95-ba55-2138cc3f1814.jpg?aki_policy=xx_large'],
	  guestLimit: 2,
	  borough: 'Brooklyn',
	  availability: 1,
	  UserId: 3
	},
		{
	  price: 200,
	  description: "Spacious studio apartment with a queen size bed and couch, which comfortably fits 3 people. PERFECT location on the UWS. Less than 10 minute walk to Central Park. Surrounded by great restaurants and shopping. Express subway station on our block.",
	  images: ['https://a0.muscache.com/im/pictures/111309794/9741d876_original.jpg?aki_policy=xx_large'],
	  guestLimit: 2,
	  borough: 'Manhattan',
	  availability: 1,
	  UserId: 2
	},
		{
	  price: 190,
	  description: "The Fenihouse is a 4 bedroom apartment with private entrance in a 1930’s townhouse. Enjoy spacious 3 bedrooms with queen size beds, one bedroom with a bunk bed and a sofa bed in the living. Very comfortable for groups of 6 to 10. Enjoy a nice cup of Nesspreso on us in the morning, on us, before heading into the City to explore.",
	  images: ['https://a2.muscache.com/im/pictures/22e9854e-4128-40b0-9ca0-2f876680c4b1.jpg?aki_policy=x_large'],
	  guestLimit: 10,
	  borough: 'Brooklyn',
	  availability: 1,
	  UserId: 14
	},
		{
	  price: 150,
	  description: "This apartment is awesome. I love it and you will too! It's got great light, super high ceilings, brick walls, and it's very quiet (all of the windows face a pretty backyard). The bedroom has an enormous king bed with super soft sheets and an amazing hotel quality comforter. The living room is spacious with a nice TV (and a very comfy green couch (good for a 3rd guest if you'd like). The kitchen is very small, but I've cooked some feasts in it, just need to be resourceful and wash as you go. This is the perfect apartment for a solo traveler or a couple exploring NYC and wanting a comfy home base with great access to the rest of the city.",
	  images: ['https://a2.muscache.com/im/pictures/61844293/519d2912_original.jpg?aki_policy=xx_large'],
	  guestLimit: 2,
	  borough: 'Brooklyn',
	  availability: 1,
	  UserId: 6
	}
]))

.catch((err) => console.log(err));
