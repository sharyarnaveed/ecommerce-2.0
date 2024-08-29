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

export {
    getproductdetail
}