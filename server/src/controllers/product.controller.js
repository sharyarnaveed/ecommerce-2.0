import connectdb from "../db/dbconn.js";


const addproduct=(async(req,res)=>
{
try {
    const {productname,price,storesizes,description}=req.body;
// console.log(JSON.stringify(storesizes));
const img1=req.file.path;
// const sizeinjson=JSON.stringify(storesizes)    
console.log(storesizes);
// console.log(sizeinjson);
// console.log(img1);
const storedata= await connectdb();
    


    const [rows]=await storedata.query(`INSERT INTO \`products\` (\`product_name\`,\`product_price\`,\`product_size\`,\`product_description\`,\`pimg1\`)
         VALUES (?,?,?,?,?)`,[productname,price,storesizes,description,img1]);
    console.log(rows);
    res.status(200).json(rows)

} catch (error) {
    console.log("eror in adding product",error);
}

})


export {
    addproduct
}