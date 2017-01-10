'use strict';
module.exports = function(sequelize, DataTypes) {
  var Listing = sequelize.define('Listing', {
    price: {
      type: DataTypes.INTEGER,
      isInt: true,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [200, 2000]
    },
    images: {
      type: DataTypes.STRING,
      allowNull: false
    },
    guestLimit: {
      type: DataTypes.INTEGER,
      allowNull: false,
      isInt: true
    },
    borough: {
      type: DataTypes.STRING,
      allowNull: false
    },
    availability: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        Listing.belongsTo(models.User);
        Listing.hasMany(models.Booking);
      }
    }
  });
  return Listing;
};
