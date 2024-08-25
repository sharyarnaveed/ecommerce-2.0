import bcrypt from "bcryptjs";
import connectdb from "../db/dbconn.js";

const registeradmin = (async (req, res) => {
    try {


        const { username, password } = req.body;
        const hashedpassword = await bcrypt.hash(password, 10);

        const thedb = await connectdb();

        const [rows] = await thedb.query(`INSERT INTO \`admin\` (\`adminname\`, \`adminpass\`) VALUES ( ?, ?) `, [username, hashedpassword])
        console.log(rows);
        res.status(200).json({
            messgage: "welcome"
        });
        // console.log("Username: ",username);
    } catch (error) {
        console.log(error, "error in admin controllers");
    }
})


const addcategory = (async (req, res) => {

    try {
        const { productname } = req.body;
        console.log(productname);


        const thedb = await connectdb();
        // // console.log(thedb);
        const [rows] = await thedb.query(`INSERT INTO \`category\` (\`category_name\`) VALUES (?) `, [productname]);
        console.log(rows);



        res.status(200).json({
            message: "Category Added"
        })

    } catch (error) {
        console.log("error in adding category", error);
    }

})


const getcategory = (async (req, res) => {
    try {
        const thedb = await connectdb();
        // // console.log(thedb);
        const [rows] = await thedb.query(`SELECT * FROM CATEGORY`);
        //  console.log(rows);
        res.json(rows)

    } catch (error) {
        console.log("error in getting categries", error);
    }
})


export {
    registeradmin,
    addcategory,
    getcategory
}