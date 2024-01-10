// const express = require('express')
import express from "express";
import dotenv from "dotenv";
import prouter from "./routes/products.js";
import urouter from "./routes/users.js";
import path from "path";
import cors from "cors";
import ejs from "ejs";
import multer from "multer";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

const upload = multer();
app.use(upload.array());

app.use(cookieParser());

app.set("view engine", "ejs");

const __dirname = path.resolve();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

app.use("/", express.static(__dirname + "/public"));

app.listen(process.env.PORT, () => {
  console.log(`run on port ${process.env.PORT}`);
});

app.use("/api/products", prouter);
app.use("/users", urouter);
