const { Passenger, Driver, Car, Trip } = require("./models");
const admin = require ('./admin').admin
const map = require('./map').map

admin.sync({ alter: true });
// Driver.sync({ alter: true });
// Passenger.sync({ alter: true });
// Car.sync({ alter: true });


Trip.sync({ alter: true });
map.sync({alter:true})
