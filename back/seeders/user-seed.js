const Sequelize = require('../models').Sequelize;
const sequelizeConnection = require('../models').sequelizeConnection;
const User = require('../models').User;

//User.sync will create the user table
User.sync({force: true})
//add the following six users to the database:
.then(() => User.bulkCreate([
  {firstName: 'Frank', lastName:'Ocean', email:'boysdontcry@gmail.com', password:'Boys1Dont2Cry3'},
  {firstName: 'Albert', lastName:'Einstein', email:'relativity@harvard.edu', password:'Fuck Gravity'},
  {firstName: 'Salina', lastName:'Fu', email:'salinafu@gmail.com', password:'Gabesux'},
  {firstName: 'Michael', lastName:'Dinnall', email:'hoorah@gmail.com', password:'Gabesux'},
  {firstName: 'Gabriel', lastName:'Bollogni', email:'nope@gmail.com', password:'Gabesux'}
]))
//the following users should NOT be added to your database:
//(if your validations are setup correctly)
// .then(() => User.bulkCreate([
//   {firstName: '', lastName:'', email:'www.boysdontcry.com', password:''},
//   {firstName: ['Einstein', 'Albert'], lastName: []}
// ], {validate: true}))
// if everything is correct, you should only have SIX users in your database
.catch((err) => console.log(err));
