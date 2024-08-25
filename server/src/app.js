import express, { json } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.ORIGIN,
    credentials: true,
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ limit: "100kb",extended:true }));
app.use(express.static("public"));

app.use(cookieParser());


// routers import 
import adminrouter from "./routes/admin.routes.js"


// routes use

app.use("/api/admin",adminrouter)



export { app };
