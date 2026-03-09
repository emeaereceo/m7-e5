// import { configDotenv } from "dotenv";
import { Pool } from "pg";
// configDotenv();

export const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

export const verificarConexion = async () => {
  await pool.query("select 1");
};
