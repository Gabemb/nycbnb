var expect = require('chai').expect;
var supertest = require('supertest');
var server = require('../back/server/server.js');
var User = require('../back/models').User;

describe('User tests:', () => {
  //fake user data that we'll use to test
 var users = [
    {firstName: 'craig',lastName: 'Maya', email: 'craig@gmail.com',password: 'pass1'},
    {firstName: 'james',lastName: 'Wall' ,email: 'james@gmail.com',password: 'pass2'},
    {firstName: 'william',lastName: 'Jin', email: 'william@gmail.com',password: 'pass3'}
  ];


   before(() => {
    return User.sync({force: true})
    .then(() => User.bulkCreate(users))
    .catch((err) => console.log('DB Err!', err));
  });



     '/'basic route test 
  it(`'/users' should respond with all users in database'`, (done) => {
    supertest(server)
      .get('/api/users')
      .end((err, res) => {

      	expect(res.body.length).equal(3)
        expect(res.body[0].firstName).equal(users[0].firstName);
        expect(res.body[1].firstName).equal(users[1].firstName);
        expect(res.body[2].firstName).equal(users[2].firstName);
        //done is required in order to execute the test
        done();
      })
  });

    ////users/:username GET individual user by firstname
  it('/users/username/:firstname should respond with specific user (by firstName)', (done) => {
    supertest(server)
      .get('/api/users/username/james')
      .end( (err, res) => {
        expect(res.body.firstName).equal(users[1].firstname);
        done();
      })
  });


      ////users/:username GET individual user by lastname
  it('/users/username/:lastName should respond with specific user (by lastName)', (done) => {
    supertest(server)
      .get('/api/users/username/Wall')
      .end( (err, res) => {
        expect(res.body.lastName).equal(users[2].lastName);
        done();
      })
  });

});