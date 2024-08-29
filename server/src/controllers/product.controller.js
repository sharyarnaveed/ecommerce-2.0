import connectdb from "../db/dbconn.js";

const addproduct = async (req, res) => {
  try {
    const { category, productname, price, storesizes, description } = req.body;

    if (
      [category, productname, price, storesizes, description].some((fields) => {
        fields?.trim() === "";
      })
    ) {
      res.json({
        message: "It is Incomplete",
      });
    }
    const images = req.files;
    const values = images.map((element, index) => {
      return { id: index, path: element.path };
    });
    // console.log(values);

    const picvalinjson = JSON.stringify(values);

    const storedata = await connectdb();
    // console.log(storesizes);

    const sql = `INSERT INTO products (category_id,product_name,product_price,product_size,product_description,pimg1) VALUES (?,?,?,?,?,?)`;
    const [rows] = await storedata.query(sql, [
      category,
      productname,
      price,
      storesizes,
      description,
      picvalinjson,
    ]);
    console.log(rows);
    res.status(200).json({
      message: "Product Added",
    });
  } catch (error) {
    console.log("eror in adding product", error);
    throw error;
  }
};

const getproduct = async (req, res) => {
  try {
    const storedata = await connectdb();
    const [rows] = await storedata.query(`SELECT 
            products.category_id,
            products.product_id,
            products.product_name, 
            products.product_price, 
            DATE(products.time) AS date_time, 
            category.category_name 
        FROM 
            category 
        INNER JOIN 
            products 
        ON 
            products.category_id = category.category_id;
        `);
    // console.log(rows);

    res.json(rows);
  } catch (error) {
    console.log("error in getting products", error);
  }
};

const deleteproduct=async(req,res)=>
{
 

  try {
    const {pid}=req.body;
    // console.log(pid);
    const deletdata = await connectdb();
    const [rows]=await deletdata.query(`DELETE FROM products WHERE product_id = ?`,[pid]);
    // console.log(rows);
    res.status(200).json({
      message: "Product Deleted"
    })
  } catch (error) {
    
    console.log("error in delete",error);
  }
}


export { addproduct, getproduct, deleteproduct };
