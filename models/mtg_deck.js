module.exports = function(sequelize, DataTypes) {
    const Deck = sequelize.define("Deck", {
      card_name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      card_uri: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      carc_cmc: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      carc_color_identity: {
        type: DataTypes.STRING
      },
      carc_image_url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
    return Deck;
  };
  