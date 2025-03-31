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
    creation_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'task',
    timestamps: false  // Desabilita as colunas createdAt e updatedAt
});
task.sync()
  .then(() => console.log('****Sincronizado****')) 
  .catch((error) => console.error('Erro ao sincronizar:', error));

export default task;
