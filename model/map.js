const sequelize = require("./db");
const { DataTypes } = require("sequelize");

const map = sequelize.define("map", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  
  source: {
    type: DataTypes.STRING(30),
    allowNull: false,
    unique: false,
  },
   destination: {
    type: DataTypes.STRING(15),
    allowNull: false,
  },
  fare:{
    type:DataTypes.FLOAT,
    allowNull:false
  }
});

module.exports.map = map;