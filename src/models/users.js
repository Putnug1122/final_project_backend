"use strict";
const { Model, ENUM } = require("sequelize");
const { genSaltSync, hashSync } = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      users.hasMany(models.join_classes);
    }
  }
  users.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      full_name: DataTypes.STRING(50),
      place_birth: DataTypes.STRING(100),
      birthday: DataTypes.DATEONLY,
      rule: {
        type: ENUM,
        values: ["admin", "user"],
      },
      email: DataTypes.STRING,
      password: {
        type: DataTypes.STRING,
        set(val) {
          this.setDataValue("password", hashSync(val, genSaltSync(10)));
        },
      },
      address: DataTypes.STRING,
      province: DataTypes.STRING(100),
      city: DataTypes.STRING(100),
      last_study: DataTypes.STRING(20),
      current_job: DataTypes.STRING(100),
    },
    {
      sequelize,
      modelName: "users",
    }
  );
  return users;
};
