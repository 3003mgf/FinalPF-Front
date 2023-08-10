import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

const Songs = sequelize.define(
  "Songs",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    songId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      defaultValue:"song"
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    explicit: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    popularity:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    artists: {
      type: DataTypes.TEXT,
      get: function () {
        return JSON.parse(this.getDataValue("artists"));
      },
      set: function (val) {
        return this.setDataValue("artists", JSON.stringify(val));
      },
    },
    audioPreview: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    audioFull: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    deleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    timestamps: false,
  }
);

  export default Songs;