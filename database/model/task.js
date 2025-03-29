import { DataTypes } from "sequelize";
import sequelize from "../database.js";

const task = sequelize.define('task', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(200)
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
    },
    date_of_creation: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    timestamps: false  // Desabilita as colunas createdAt e updatedAt
});

export default task;
