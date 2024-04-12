const { saltHashPassword } = require("../../helpers/utils");
const baseSchema = require("../schemas/baseSchema");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      ...baseSchema,
      name: {
        field: "name",
        type: DataTypes.STRING,
        length: 20,
      },
      phone: {
        field: "phone",
        type: DataTypes.STRING,
        length: 20,
      },
      password: {
        field: "password",
        type: DataTypes.STRING,
        length: 200,
        set(value) {
          this.setDataValue("password", saltHashPassword(value));
        },
      },
    }, {
    sequelize,
    tableName: "users",
    timestamps: false,
    underscored: true,
    freezeTableName: true,
  });

  User.associate = function (models) {
    User.hasMany(models.Task, {
      as: 'tasks',
      foreignKey: {
        name: 'user_id'
      },
      onDelete: 'CASCADE',
    });
  };

  return User;
};