"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class classes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ classes, users, join_classes, schedules }) {
      // define association here
      // classes.hasMany(models.join_classes);
      classes.belongsToMany(users, {
        through: "join_classes",
        foreignKey: "class_id",
        onDelete: "CASCADE",
      });
      classes.hasMany(schedules, {
        foreignKey: "class_id",
        onDelete: "CASCADE",
      });
    }
  }
  classes.init(
    {
      id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      code: DataTypes.STRING(6),
      description: DataTypes.STRING,
      img: DataTypes.STRING,
      start_date: DataTypes.DATEONLY,
      end_date: DataTypes.DATEONLY,
    },
    {
      sequelize,
      modelName: "classes",
      initialAutoIncrement: 1,
    }
  );
  return classes;
};
