import express from "express";
import { getBrands, addBrand, deleteBrand } from "../controller/products.js";

const router = express.Router();

router.get("/", getBrands);
router.post("/", addBrand);
router.delete("/", deleteBrand);

export default router;
