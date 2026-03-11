import "dotenv/config";
import app from "./app.js";
import { sequelize } from "./database/db.js";

const PORT = process.env.PORT;

async function main() {
  try {
    // await sequelize.authenticate();
    // console.log("Conexion exitosa con la base de datos");

    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error to connect database", error);
  }
}

main();
