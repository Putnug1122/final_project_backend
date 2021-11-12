"use strict";
const { Model, ENUM } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class materials extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      materials.belongsTo(models.schedules, { foreignKey: "schedule_id" });
    }
  }
  materials.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: DataTypes.STRING,
      file: DataTypes.STRING,
      type: {
        type: ENUM,
        values: ["recording", "material"],
      },
      schedule_id: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "materials",
    }
  );
  return materials;
};
