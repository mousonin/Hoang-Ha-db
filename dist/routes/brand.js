import express from "express";
import { getBrands, addBrand, deleteBrand, updateBrand, } from "../controller/brand.js";
const router = express.Router();
router.get("/", getBrands);
router.patch("/:id", updateBrand);
router.post("/", addBrand);
router.delete("/", deleteBrand);
export default router;
