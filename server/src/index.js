import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));

// ====== Schemas ======
const Shop = mongoose.model(
  "Shop",
  new mongoose.Schema({
    name: String,
    address: String,
    lat: Number,
    lng: Number,
  })
);

const Product = mongoose.model(
  "Product",
  new mongoose.Schema({
    shopId: mongoose.Schema.Types.ObjectId,
    name: String,
    price: Number,
    image: String,
    isBouquet: Boolean,
    isFavorite: Boolean,
    dateAdded: { type: Date, default: Date.now },
  })
);

const Order = mongoose.model(
  "Order",
  new mongoose.Schema({
    shopId: mongoose.Schema.Types.ObjectId,
    name: String,
    email: String,
    phone: String,
    address: String,
    total: Number,
    createdAt: { type: Date, default: Date.now },
    items: [
      {
        productId: mongoose.Schema.Types.ObjectId,
        name: String,
        quantity: Number,
        price: Number,
      },
    ],
  })
);

// ====== Routes ======
app.get("/api/health", (req, res) => res.json({ ok: true }));

app.get("/api/shops", async (req, res) => {
  const shops = await Shop.find();
  res.json(shops);
});

app.get("/api/shops/:id/products", async (req, res) => {
  const products = await Product.find({ shopId: req.params.id }).sort({
    dateAdded: -1,
  });
  res.json(products);
});

app.post("/api/orders", async (req, res) => {
  const { shopId, name, email, phone, address, items } = req.body;
  if (!items || !items.length)
    return res.status(400).json({ error: "Empty cart" });
  const total = items.reduce((s, it) => s + it.price * it.quantity, 0);
  const order = new Order({
    shopId,
    name,
    email,
    phone,
    address,
    total,
    items,
  });
  await order.save();
  res.status(201).json(order);
});

app.get("/api/orders/:id", async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (!order) return res.status(404).json({ error: "Order not found" });
  res.json(order);
});

// ====== Start ======
const port = process.env.PORT || 10000;
app.listen(port, () => console.log(`Server running on port ${port}`));
