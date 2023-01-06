import pool from "../db/db.js";
export const getProduct = async (req, res) => {
    try {
        let productQuery = `SELECT * FROM public."products"`;
        if (req.query) {
            productQuery += ` WHERE name LIKE '%${req.query.name}%'`;
        }
        const getProducts = await pool.query(productQuery);
        res.json(getProducts.rows);
    }
    catch (err) {
        res.json(err);
    }
};
export const addProduct = async (req, res) => {
    try {
        const { name, brand, yearOfManufacture, price } = req.body;
        const addProduct = await pool.query(`INSERT INTO public."products"("name", "brand", "year of manufacture", "price")
      values ('${name}', '${brand}', '${yearOfManufacture}', '${price}')
      returning *`);
        res.json(addProduct.rows);
    }
    catch (err) {
        res.json(err);
    }
};
export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteProduct = await pool.query(`DELETE FROM public."products" WHERE id = ${id} returning *`);
        res.json(deleteProduct.rows);
    }
    catch (err) {
        res.json(err);
    }
};
export const updateProduct = async (req, res) => {
    try {
        const updateProduct = await pool.query(`UPDATE public."products"
      SET price = '${req.body.price}', promotion = '${req.body.promotion}'
      where id = ${req.params.id} returning *`);
        res.json(updateProduct.rows);
    }
    catch (err) {
        res.json(err);
    }
};
export const sortProducts = async (req, res) => {
    try {
        let sortBy = `select * from public."products" order by ${req.params.by}`;
        if (req.params.by.slice(-4) == "DESC") {
            sortBy = sortBy.replace("DESC", " DESC");
        }
        const sortProducts = await pool.query(sortBy);
        res.json(sortProducts.rows);
    }
    catch (err) {
        res.json(err);
    }
};
export const getDetailProduct = async (req, res) => {
    try {
        const getDetailProduct = await pool.query(`select products.*, brand.description
      from products 
      left join brand
      on products.brand = brand.brand 
      where products.id = ${req.params.id}`);
        res.json(getDetailProduct.rows);
    }
    catch (err) {
        res.json(err);
    }
};
