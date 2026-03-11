import { Sequelize } from "sequelize";

const dbname = process.env.DB_NAME;
const dbuser = process.env.DB_USER;
const dbpass = process.env.DB_PASSWORD;

// La configuracion recibe un DBNAME, USER, PASS, {CONFIG}
export const sequelize = new Sequelize(dbname, dbuser, dbpass, {
  host: "localhost",
  dialect: "postgres",
});
