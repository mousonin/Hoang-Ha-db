import pool from "../db/db.js";
export const getBrands = async (req, res) => {
    try {
        const allBrands = await pool.query(`SELECT * FROM public."brand"`);
        res.json(allBrands.rows);
    }
    catch (err) {
        res.json(err);
    }
};
export const addBrand = async (req, res) => {
    try {
        const { brand, description } = req.body;
        const newListBrands = await pool.query(`insert into public."brand"("brand","description")
      values('${brand}','${description}') 
      returning *`);
        res.json(newListBrands);
    }
    catch (err) {
        res.json(err);
    }
};
export const deleteBrand = async (req, res) => {
    try {
        const deleteBrand = await pool.query(`delete from public."brand" where brand in ('${req.body.brand}')`);
        res.json(deleteBrand);
    }
    catch (err) {
        res.json(err);
    }
};
export const updateBrand = async (req, res) => {
    try {
        const updateBrand = await pool.query(`
    update public."brand"
    set "description" = '${req.body.description}'
    where id = ${req.params.id} returning *`);
        res.json(updateBrand.rows);
    }
    catch (err) {
        res.json(err);
    }
};
