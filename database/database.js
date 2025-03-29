import { Sequelize } from "sequelize"; 
const sequelize = new Sequelize('todoDB', 'postgres','15951',{
    port: 5000,
    dialect: 'postgres',
    host: 'localhost'
})
sequelize.authenticate()
    .then(() => console.log("Banco de dados conectado com sucesso!"))
    .catch(err => console.error("Erro ao conectar ao banco de dados:", err));
export default sequelize;