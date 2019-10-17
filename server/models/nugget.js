'use strict';
module.exports = (sequelize, DataTypes) => {
  const Nugget = sequelize.define('Nugget', {
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: false },
    externalLink: DataTypes.STRING
  }, {});

  Nugget.associate = (models) => {
    Nugget.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    })
  };
  
  return Nugget;
};
