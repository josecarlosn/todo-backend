import { Sequelize } from "sequelize"; 
const sequelize = new Sequelize('TODODB', 'postgres','159487',{
    port: 5432,
    dialect: 'postgres',
    host: 'localhost'
})
sequelize.authenticate()
    .then(() => console.log("Banco de dados conectado com sucesso!"))
    .catch(err => console.error("Erro ao conectar ao banco de dados:", err));
export default sequelize;