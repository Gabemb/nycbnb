'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    firstName: {
      type:DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type:DataTypes.STRING,
       allowNull: false,
     },
    email:{
    type: DataTypes.STRING,
    isEmail: true,
    allowNull:false
  },
    password:{ 
      type: DataTypes.STRING,
      allowNull:false,
      len: [5,35]
    }
  }, {
    classMethods: {
      associate: function(models) {
        User.hasOne(models.Listing);
        User.hasMany(models.Booking);
        // associations can be defined here
      }
    }
  });
  return User;
};