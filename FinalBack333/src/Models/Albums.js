import { DataTypes } from 'sequelize'
import { sequelize } from '../db.js'

const Albums = sequelize.define(
  "Albums",
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
    albumId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      defaultValue: "album"
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
    tracks: {
      type: DataTypes.TEXT,
      get: function () {
        return JSON.parse(this.getDataValue("tracks"));
      },
      set: function (val) {
        return this.setDataValue("tracks", JSON.stringify(val));
      },
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 50
    },
    stock: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 100
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

export default Albums
