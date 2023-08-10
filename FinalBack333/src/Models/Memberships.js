import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

const Memberships = sequelize.define('Memberships', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false
    },
    description:{
      type: DataTypes.STRING,
      allowNull: false
    },
    duration:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    price:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    avatar:{
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

  export default Memberships;