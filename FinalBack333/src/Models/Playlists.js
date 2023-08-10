import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

const Playlists = sequelize.define('Playlists', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    playlistId:{
      type: DataTypes.STRING,
      allowNull: false
    },
    type:{
      type: DataTypes.STRING,
      allowNull: false
    },
    owner:{
      type: DataTypes.STRING,
      allowNull: false
    },
    belongsTo: {
      type: DataTypes.STRING,
      defaultValue: "Soul Life"
    },
    tracks: {
      type: DataTypes.TEXT, 
      get: function() {
          return JSON.parse(this.getDataValue('tracks'));
      }, 
      set: function(val) {
          return this.setDataValue('tracks', JSON.stringify(val));
      }
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false
    },
    deleted:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
  },
  {
    timestamps: false
  })

  export default Playlists;