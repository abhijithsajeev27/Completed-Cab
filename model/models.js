const sequelize = require("./db");
const { DataTypes } = require("sequelize");

const Passenger = sequelize.define("Passenger", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fname: {
    type: DataTypes.STRING(70),
    allowNull: false,
  },
  lname: {
    type: DataTypes.STRING(70),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(30),
    allowNull: false,
    unique: true,
  },
  phone: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(15),
    allowNull: false,
  },
});

const Driver = sequelize.define("Driver", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  car_id: {
    type: DataTypes.INTEGER,
    // references:{
    //     model:'cars',
    //     keys:'id'
    // }
  },
  fname: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  lname: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },
  vehicleno: {
    type: DataTypes.INTEGER(10),
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING(30),
    allowNull: false,
    unique: true,
  },
  phone: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(15),
    allowNull: false,
  },
});

const Trip = sequelize.define("trip", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  carno: {
    type: DataTypes.INTEGER(10),
    // allowNull: false,
  },

  source: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  destination: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  time: {
    type: DataTypes.TIME,
    allowNull: false,
  },

  mode:{
    type: DataTypes.STRING,
    allowNull: false,

  },
  bookingdate:{
    type: DataTypes.DATEONLY,
    allowNull: false,
  }
});

const Car = sequelize.define("cars", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(30),
    allowNull: false,
  },

  carno: {
    type: DataTypes.INTEGER(10),
    allowNull: false,
  },

  type: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
});

Passenger.hasMany(Trip);
Trip.belongsTo(Passenger);

Driver.hasMany(Car);
Car.belongsTo(Driver);

Driver.hasMany(Trip);
Trip.belongsTo(Driver);

Car.hasMany(Trip);
Trip.belongsTo(Car);

module.exports.Passenger = Passenger;
module.exports.Driver = Driver;
module.exports.Trip = Trip;
module.exports.Car = Car;
