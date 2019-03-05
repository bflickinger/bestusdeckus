module.exports = function (sequelize, DataTypes) {
  const Userdeck = sequelize.define("Userdeck", {
    deck_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    notes: {
      type: DataTypes.TEXT
    }
  });

  Userdeck.associate = function (models) {
    Userdeck.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  Userdeck.associate = function (models) {
    Userdeck.hasMany(models.Usercard, {
      onDelete: "cascade"
    });
  };

  return Userdeck;
};
