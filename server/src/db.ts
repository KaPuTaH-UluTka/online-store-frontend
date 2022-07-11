import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  process.env.DB_NAME || 'online_store',
  process.env.DB_USER || 'postgres',
  process.env.DB_PASSWORD || 'password',
  {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT ? +process.env.DB_PORT : 5432,
  }
);

export default sequelize;
