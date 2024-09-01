import connectdb from "../db/dbconn.js";


const placeoredr=async(req,res)=>
{
    try {
        const db=await connectdb()
        const {fname,lname,email,Cod,address,mobilenumber,getproducts_id}=req.body;

       
        const sqlOrder = `INSERT INTO ORDERS (firstname,lastname,email,address,mobilenum) VALUES (?,?,?,?,?)`;
        const [orderResult] = await db.query(sqlOrder, [
            fname,
            lname,
            email,
            
            address,
            mobilenumber
        ]);
        
      
        // Then, insert each product ID into a related table, e.g., `order_products`
        const orderId = orderResult.insertId;
        
        const sqlProduct = `INSERT INTO order_products (order_id, product_id) VALUES (?,?)`;
        for (let productId of getproducts_id) {
            await db.query(sqlProduct, [orderId, productId]);
        }

        res.json({
            message: "Order placed successfully",
            success:true
        })


    } catch (error) {
        console.log("error in saving order", error);
    }
}


export {placeoredr}