import bcrypt from "bcryptjs";
import connectdb from "../db/dbconn.js";
// import { gettoken } from "../utils/generatewebtoken.utils.js";
import jwt from "jsonwebtoken";

const loginadmin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const thedb = await connectdb();

    console.log(username);

    const [finduser_name] = await thedb.query(
      `SELECT * FROM admin WHERE adminname = ?`,
      [username]
    );

    //   console.log(finduser_name);
    if (finduser_name.length == 0) {
      res.json({
        messsage: "User Not Found",
      });
    }

    const results = finduser_name[0];
    // res.json(results);
    const isMatch = await bcrypt.compare(password, results.adminpass);

    if (!isMatch) {
      res.status(400).json("Invalid Password");
    }
    console.log("right pass");
    const user_id = results.admin_id;

    // generate jwt tokens
    const accesstoken = await jwt.sign(
      { id: user_id },
      process.env.ACCESS_TOKEN_KEY,
      { expiresIn: process.env.ACCESS_TOKEN_TIME }
    );

    const refreshtoken = await jwt.sign(
      { id: user_id },
      process.env.REFRESH_TOKEN_KEY,
      { expiresIn: process.env.REFRESH_TOKEN_TIME }
    );

    // update refresh token in database

    await thedb.query("UPDATE admin SET refresh_token =? WHERE admin_id= ?", [
      refreshtoken,
      user_id,
    ]);

    // send data in cookies

    const options = {
      httpOnly: true,
      secure: true,
    };

    return res
      .status(200)
      .cookie("accessToken", accesstoken, options)
      .cookie("refreshToken", refreshtoken, options)

      .json({
        message: "Login Successfull",
      });
  } catch (error) {
    console.log(error, "error in admin controllers");
  }
};

const addcategory = async (req, res) => {
  try {
    const { productname } = req.body;
    console.log(productname);

    const thedb = await connectdb();
    // // console.log(thedb);
    const [rows] = await thedb.query(
      `INSERT INTO \`category\` (\`category_name\`) VALUES (?) `,
      [productname]
    );
    console.log(rows);

    res.status(200).json({
      message: "Category Added",
    });
  } catch (error) {
    console.log("error in adding category", error);
  }
};

const getcategory = async (req, res) => {
  try {
    const thedb = await connectdb();
    // // console.log(thedb);
    const [rows] = await thedb.query(`SELECT * FROM CATEGORY`);
    //  console.log(rows);
    res.json(rows);
  } catch (error) {
    console.log("error in getting categries", error);
  }
};

const logout = async (req, res) => {

  const thedb = await connectdb();
  const user_id = req.user.user_id;
  const rf = "undefined";
  await thedb.query("UPDATE admin SET refresh_token =? WHERE admin_id= ?", [
    rf,
    user_id,
  ]);

  const options = {
    httpOnly: true,
    secure: true,
  };

  res.clearCookie("accessToken", options);
  res.clearCookie("refreshToken", options);
  res.json({ 
    message: "Logged out successfully",
    success:true
   });
};

export { loginadmin, addcategory, getcategory, logout };
