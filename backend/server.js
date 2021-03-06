import express from "express";
import mongoose from "mongoose";
// import data from "./data.js";
import productRouter from "./Routers/productRouter.js";
import userRouter from "./Routers/userRouter.js";
import dotenv from "dotenv";
import orderRouter from "./Routers/orderRouter.js";
import path from "path";

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/amazona", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// app.get("/api/products/:id", (req, res) => {
//   const product = data.products.find((x) => x._id === req.params.id);
//   if (product) {
//     res.send(product);
//   } else {
//     res.status(404).send({ message: "Product not Found" });
//   }
// });

// app.get("/api/products", (req, res) => {
//   res.send(data.products);
// });

//apply the middleware funtion userRouter to all the route that match with /api/users/...
app.use("/api/users", userRouter);

app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);

app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || "sb");
});

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/frontend/build")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/frontend/build/index.html"))
);
// app.get("/", (req, res) => {
//   res.send("server is ready");
// });

//apply this middleware function to any route bellow
app.use((err, req, res) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5002;
app.listen(port, () => {
  console.log("server at 5002");
});
