import mysql from "mysql2/promise";
import { DATABASE_NAME } from "../constants.js";


 const connectdb=async()=>
 {

    try{
        const thecon= await mysql.createPool({
   
            host:`${process.env.HOST_NAME}`,
            user:`${process.env.USER}`,
            password:'',
            database:DATABASE_NAME,
        })

        console.log("connected");
        return thecon
    }
    catch (error){
console.log("error in db connection",error);
    }
   
 }

 export default connectdb
 


