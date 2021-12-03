"use strict";
const { Model, ENUM, Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class join_classes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ join_classes, users, classes, presences, schedules }) {
      // define association here
      // join_classes.belongsTo(models.users, { foreignKey: "user_id" });
      // join_classes.hasMany(presences);
      join_classes.belongsTo(classes, { foreignKey: "class_id" });
      join_classes.belongsToMany(schedules, {
        through: "presences",
        as: "absen",
        foreignKey: "join_class_id",
      });
    }
  }
  join_classes.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.UUID,
      },
      class_id: { type: DataTypes.INTEGER(11) },
      role: {
        type: ENUM,
        values: ["student", "tutor", "facilitator"],
      },
    },
    {
      sequelize,
      modelName: "join_classes",
    }
  );
  return join_classes;
};
