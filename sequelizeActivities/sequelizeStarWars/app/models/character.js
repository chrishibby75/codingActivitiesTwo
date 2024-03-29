var Sequelize = require('sequelize');

var sequelize = require("../config/connection");

var Character = sequelize.define("character", {
    routeName: Sequelize.STRING,
    name: Sequelize.STRING,
    role: Sequelize.STRING,
    age: Sequelize.INTEGER,
    forcePoints: Sequelize.INTEGER
},{
    freezeTableName: true
});

Character.sync();

module.exports = Character;