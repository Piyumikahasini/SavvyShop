import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import productRouter from "./routes/productRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

//  app config
const app = express();
const port = 4000;

// middleware
app.use(express.json());
app.use(cors());

// DB connection
connectDB();

// api endpoint
app.use("/api/product", productRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order",orderRouter)

app.get("/", (req, res) => {
  res.send("API IS WORKING");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// mongodb+srv://codeat:<db_password>@cluster0.j3f5p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

// mongodb://codeat:<db_password>@cluster0-shard-00-00.j3f5p.mongodb.net:27017,cluster0-shard-00-01.j3f5p.mongodb.net:27017,cluster0-shard-00-02.j3f5p.mongodb.net:27017/?ssl=true&replicaSet=atlas-bqytn1-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0
