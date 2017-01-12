'use strict';

module.exports = function(sequelize,
  DataTypes) {
  var Booking = sequelize.define('Booking', {
    checkIn: { 
      type: DataTypes.STRING,
      isDate: true,
      allowNull: false
    },
    checkOut: {
      type: DataTypes.STRING,
      isDate: true,
      allowNull: false
    },
    guests: {
      type: DataTypes.INTEGER,
      allowNull: false,
      isInt: true
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