import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// Schemas
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

async function run() {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Mongo connected for seeding");

  await Shop.deleteMany({});
  await Product.deleteMany({});

  const shop1 = new Shop({
    name: "Central Flowers",
    address: "Main St 10",
    lat: 50.45,
    lng: 30.52,
  });
  const shop2 = new Shop({
    name: "West Bloom",
    address: "West Ave 5",
    lat: 50.42,
    lng: 30.4,
  });
  await shop1.save();
  await shop2.save();

  const products = [
    {
      shopId: shop1._id,
      name: "Roses Bouquet",
      price: 29.99,
      image: "https://placehold.co/200x200?text=Roses",
      isBouquet: true,
    },
    {
      shopId: shop1._id,
      name: "Tulips Mix",
      price: 19.5,
      image: "https://placehold.co/200x200?text=Tulips",
      isBouquet: true,
    },
    {
      shopId: shop2._id,
      name: "Single Sunflower",
      price: 5.0,
      image: "https://placehold.co/200x200?text=Sunflower",
      isBouquet: false,
    },
    {
      shopId: shop2._id,
      name: "Spring Mix",
      price: 25.0,
      image: "https://placehold.co/200x200?text=Spring",
      isBouquet: true,
    },
  ];

  await Product.insertMany(products);
  console.log("Seed data inserted");

  await mongoose.disconnect();
}

run().catch((err) => console.error(err));
