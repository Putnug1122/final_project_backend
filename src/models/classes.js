"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class classes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      classes.hasMany(models.join_classes);
      classes.hasMany(models.schedules);
    }
  }
  classes.init(
    {
      id: { type: DataTypes.INTEGER(11), primaryKey: true },
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
    }
  );
  return classes;
};
