import express, { json } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { fileURLToPath } from 'url';
import path from "path";
const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the 'public' directory
app.use('/public/images',express.static(path.join(__dirname, '../public/images')));

app.use(express.json({ limit: "100kb" }));
app.use(express.urlencoded({ limit: "100kb", extended: true }));
// app.use(express.static("public"));

app.use(cookieParser());


// routers import 
import adminrouter from "./routes/admin.routes.js"
import userrouter from "./routes/user.routes.js"

// routes use

app.use("/api/admin", adminrouter)
app.use('/api/user', userrouter)


export { app };
