import connectdb from "../db/dbconn.js";

const getproductdetail=async(req,res)=>
{
    try {
        const db=await connectdb();
        const id=req.params.id;
        console.log(id);
        const query="SELECT * FROM products WHERE product_id=?";
        const [result]=await db.query(query,id);
        // console.log(result);
        res.json(result)
    } catch (error) {
        console.log("error in fecting product detail",error);
    }
}


const bags=async(req,res)=>
{
try {
    const db= await connectdb();
    const[rows]= await db.query(`SELECT products.category_id, products.product_id,
        products.product_name, products.product_price, products.pimg1, category.category_name
         FROM category INNER JOIN products
        ON products.category_id = category.category_id WHERE category.category_name = 'bags'`)
        console.log(rows);
        if(rows.lengt==0)
        {
            res.json("No Products Added")
        }
        else
        {
            res.json(rows)
           
        }
        
} catch (error) {
    console.log("error in bags",error);
}
}


const shoes=async(req,res)=>
    {
    try {
        const db= await connectdb();
        const[rows]= await db.query(`SELECT products.category_id, products.product_id,
            products.product_name, products.product_price, products.pimg1, category.category_name
             FROM category INNER JOIN products
            ON products.category_id = category.category_id WHERE category.category_name = 'shoes'`)
            console.log(rows);
           res.json(rows)
          
    } catch (error) {
        console.log("error in shoes",error);
    }
    }


    const belts=async(req,res)=>
        {
        try {
            const db= await connectdb();
            const[rows]= await db.query(`SELECT products.category_id, products.product_id,
                products.product_name, products.product_price, products.pimg1, category.category_name
                 FROM category INNER JOIN products
                ON products.category_id = category.category_id WHERE category.category_name = 'belts'`)
                console.log(rows);
               res.json(rows)
              
        } catch (error) {
            console.log("error in belts",error);
        }
        }



export {
    getproductdetail,
    bags,
    shoes,
    belts
}