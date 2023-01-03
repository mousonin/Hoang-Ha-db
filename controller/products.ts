import { text } from "stream/consumers";
import pool from "../db/db.js";

export const getBrands = async (req: any, res: any) => {
  try {
    const allBrands = await pool.query(`SELECT * FROM public."brand"`);
    res.json(allBrands.rows);
  } catch (err) {
    res.json(err);
  }
};

export const addBrand = async (req: any, res: any) => {
  try {
    const newListBrands = await pool.query(
      `insert into public."brand"("brand")
      values('${<Text>req.body.brand}') 
      returning *`
    );
    res.json(newListBrands);
  } catch (err) {
    res.json(err);
  }
};

export const deleteBrand = async (req: any, res: any) => {
  try {
    const deleteBrand = await pool.query(
      `delete from public."brand" where brand in ('${req.body.brand}')`
    );
    res.json(deleteBrand);
  } catch (err) {
    res.json(err);
  }
};
