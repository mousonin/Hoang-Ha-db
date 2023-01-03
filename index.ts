import express, { json } from "express";
import productRouter from "./routes/products.js";
const app = express();

app.use(json());

app.use("/products", productRouter);

app.listen(3000, () => console.log("Server listening on port " + 3000));
