import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import HomeRouterV1 from "./v1/routes/home.js";
import ProductsRouterV1 from "./v1/routes/productRoutes.js";
import UserRouterV1 from "./v1/routes/userRoutes.js";
import CategoryRouterV1 from "./v1/routes/categoryRoutes.js";

import BookRouterV1 from "./v1/routes/bookRoutes.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:5000"],
    credentials: true,
  })
);

app.use("/", HomeRouterV1);
app.use("/api/v1/products", ProductsRouterV1);
app.use("/api/v1/users", UserRouterV1);
app.use("/api/v1/categories", CategoryRouterV1);

app.use("/api/v1/books", BookRouterV1);
// app.use("/api/v1/comics", RegisterRouterV1);
// app.use("/api/v1/games", RegisterRouterV1);

const PORT = process.env.PORT;

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(`Error: ${error.message}`));
