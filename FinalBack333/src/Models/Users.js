import { DataTypes, UUIDV4 } from "sequelize";
import { sequelize } from "../db.js";

const Users = sequelize.define(
  "Users",
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: UUIDV4,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cart: {
      type: DataTypes.TEXT, 
      get: function() {
          return JSON.parse(this.getDataValue('cart'));
      }, 
      set: function(val) {
          return this.setDataValue('cart', JSON.stringify(val));
      }
    },
    favorites: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
      defaultValue: [],
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      // unique: true
      // Lo comento porque si no cada usuario tendria que tener contraseña distinta
    },
    admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    avatar: {
      type: DataTypes.STRING,
    },
    googleUser:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    member: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    memberExpire:{
      type: DataTypes.DATE,
      allowNull: true
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

  export default Users;