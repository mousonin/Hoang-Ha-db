import express from "express";
import {
  addProduct,
  deleteProduct,
  getProduct,
  sortProducts,
  updateProduct,
} from "../controller/products.js";

const router = express.Router();

router.get("/", getProduct);
router.get("/:sort/:by", sortProducts);
router.post("/", addProduct);
router.delete("/:id", deleteProduct);
router.patch("/:id", updateProduct);

export default router;
