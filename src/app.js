import express from "express";
const app = express();
import productsRoutes from "./routes/products.routes.js";

app.use(express.json());
app.use(productsRoutes);

export default app;
