'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    firstName: {
      type:DataTypes.STRING,
      allowNull: false,
      isAlpha: true              
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      isAlpha: true      
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      isEmail: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [5, 35]
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        User.hasOne(models.Listing);
        User.hasMany(models.Booking);
      }
    }
  });
  return User;
};