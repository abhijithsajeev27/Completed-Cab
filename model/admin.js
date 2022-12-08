const sequelize = require("./db");
const { DataTypes } = require("sequelize");

const admin = sequelize.define("admin", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  
  email: {
    type: DataTypes.STRING(30),
    allowNull: false,
    unique: true,
  },
   password: {
    type: DataTypes.STRING(15),
    allowNull: false,
  },
});

module.exports.admin = admin;