'use strict';
module.exports = function(sequelize, DataTypes) {
  var Booking = sequelize.define('Booking', {
    checkIn: {
      type:DataTypes.DATEONLY,
      isDate: true,
      allowNull: false
    },
    checkOut:{
      type:DataTypes.DATEONLY,
      isDate: true,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        Booking.belongsTo(models.User);
        Booking.belongsTo(models.Listing);
      }
    }
  });
  return Booking;
};