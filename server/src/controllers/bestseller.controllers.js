import connectdb from "../db/dbconn.js";


const getall=async(req,res)=>
{
try {
    const getbestseller=await connectdb();

    const[rows]= await getbestseller.query(`SELECT * FROM products LIMIT 12`)
    console.log(rows);
    res.json(rows)
} catch (error) {
    console.log("error in get bestsellar All",error);
}
}

const bestseller=async(req,res)=>
{
    try {
        const getbestseller=await connectdb();
const {categoryval}=req.body;

    const[rows]= await getbestseller.query(`SELECT products.category_id, products.product_id,
         products.product_name, products.product_price, products.pimg1, category.category_name
          FROM category INNER JOIN products
         ON products.category_id = category.category_id WHERE category.category_name= ?`,[categoryval])
    console.log(categoryval);
    res.json(rows)
    } catch (error) {
        console.log(error);
    }
}




export {
    getall,
    bestseller
}