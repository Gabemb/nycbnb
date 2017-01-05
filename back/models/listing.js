'use strict';
module.exports = function(sequelize, DataTypes) {
  var Listing = sequelize.define('Listing', {
    price: {
      type: DataTypes.INTEGER,
      isInt: true,
    description:{
    type:DataTypes.STRING,
    allowNull: false,
    len: [200,2000]
  },
   images: {
    type: DataTypes.ARAY(DataTypes.STRING),
    allowNull: false
  },
    guestLimit: {
      type:DataTypes.INTEGER,
      isInt: true,
      allowNull:false
    },
    borough: {
      type:DataTypes.STRING,
      allowNull: false
    },
    availability: DataTypes.BOOLEAN
  }
  }, {
    classMethods: {
      associate: function(models) {
        Listing.belongsTo(models.User);
        Listing.hasMany(models.Booking);
        // associations can be defined here
      }
    }
  });
  return Listing;
};

   