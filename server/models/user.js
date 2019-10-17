'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    admin: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false }
  }, {});

  User.associate = (models) => {
    User.hasMany(models.Nugget, {
      foreignKey: 'userId',
      as: 'nuggets',
    })
  };

  return User;
};
