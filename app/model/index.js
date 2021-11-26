const { DataTypes } = require('sequelize');
const { sqlize } = require('../config/database.config')

const db = {};

(async () => {
    await sqlize.sync();
})();

db.user = require('./user.model')(sqlize, DataTypes);


module.exports = db