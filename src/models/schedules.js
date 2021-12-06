"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class schedules extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({
      classes,
      join_classes,
      presences,
      materials,
      schedules,
    }) {
      // define association here
      schedules.belongsTo(classes, {
        foreignKey: "class_id",
        onDelete: "CASCADE",
      });
      schedules.belongsToMany(join_classes, {
        through: "presences",
        foreignKey: "schedule_id",
        as: "absensi",
      });
      // schedules.hasMany(presences);
      schedules.hasMany(materials);
    }
  }
  schedules.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      class_id: DataTypes.INTEGER(11),
      name: DataTypes.STRING,
      code: DataTypes.STRING(6),
      start: DataTypes.DATE,
      end: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "schedules",
    }
  );
  return schedules;
};
