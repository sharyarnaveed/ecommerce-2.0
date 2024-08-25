
import connectdb from "./db/dbconn.js";
import { app } from "./app.js";
import dotenv from "dotenv";

dotenv.config({
    path: "./env",
})


//  console.log(process.env.PORT);
connectdb()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("server is running on", `${process.env.PORT}`);
        })
    })
    .catch((error) => {
        console.log(error, "error in db");

    })