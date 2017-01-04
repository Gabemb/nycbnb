'use strict';
module.exports = function(sequelize, DataTypes) {
  var Booking = sequelize.define('Booking', {
    checkIn: {
      type: DataTypes.DATEONLY,
      isDate: true
    },
    checkOut: {
      type: DataTypes.DATEONLY,
      isDate: true
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Booking.belongsTo(models.User);
        Booking.belongsTo(models.Listing);
      }
    }
  });
  return Booking;
};