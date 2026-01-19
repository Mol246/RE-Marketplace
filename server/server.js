import express from "express";
import morgan from "morgan";
import cors from "cors";
import mongoose from "mongoose";
import { DATABASE } from "./config.js";
import authRoutes from "./routes/auth.js";

const app = express();

// db
mongoose
    .connect(DATABASE)
    .then(() => console.log("DB_connected"))
    .catch((err) => console.log("DB_connection_error", err));

// middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// routes middleware
app.use("/api", authRoutes);

app.listen(8000, () => console.log("server_running_on_port_8000"));