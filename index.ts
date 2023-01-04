import express, { json } from "express";
import brandRouter from "./routes/brand.js";
import productsRouter from "./routes/products.js";
const app = express();

app.use(json());

app.use("/brand", brandRouter);
app.use("/products", productsRouter);

app.listen(3000, () => console.log("Server listening on port " + 3000));
