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
    dateAdded: { type: Date, default: new Date().toLocaleString() },
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

  const TheSecretGarden = new Shop({
    name: "The Secret Garden",
    address: "вул. Наукова, 24",
    lat: 49.80627,
    lng: 24.00141,
  });
  const BloomStudio = new Shop({
    name: "Bloom Studio",
    address: "вул. Тараса Шевченка, 12",
    lat: 49.84302,
    lng: 24.01715,
  });
  const SunshineFlowers = new Shop({
    name: "Sunshine Flowers",
    address: "вул. Січових Стрільців, 1",
    lat: 49.84129,
    lng: 24.02574,
  });
  const BloomBeyond = new Shop({
    name: "Bloom & Beyond",
    address: "вул. Володимира Великого, 50",
    lat: 49.81208,
    lng: 23.99066,
  });
  const FlowerBoutique = new Shop({
    name: "Flower Boutique",
    address: "просп. Свободи, 10",
    lat: 49.84057,
    lng: 24.02919,
  });

  await TheSecretGarden.save();
  await BloomStudio.save();
  await SunshineFlowers.save();
  await BloomBeyond.save();
  await FlowerBoutique.save();

  const products = [
    {
      shopId: TheSecretGarden._id,
      name: "Букет червоних троянд (25 шт.)",
      price: 1800,
      image:
        "https://dicentra.ua/assets/images/products/259/fer-15-01-22-granpree-25-pudra-00370.jpg",
      isBouquet: true,
      isFavorite: false,
    },
    {
      shopId: TheSecretGarden._id,
      name: "Букет білих троянд (15 шт.)",
      price: 1200,
      image:
        "https://camellia-market.com.ua/image/cache/catalog/15troyand/img_6429-auto_width_1333.jpg",
      isBouquet: true,
      isFavorite: false,
    },
    {
      shopId: TheSecretGarden._id,
      name: "Тюльпани мікс (21 шт.)",
      price: 950,
      image:
        "https://shop.camellia.ua/upload/kamelia_flora/photos/c1/b3/1200x1200/78b6bccd_5c79576e5294c.JPG",
      isBouquet: true,
      isFavorite: false,
    },
    {
      shopId: TheSecretGarden._id,
      name: "Півонії рожеві (9 шт.)",
      price: 1350,
      image:
        "https://camellia-market.com.ua/image/cache/catalog/piony/13.06/photo_2023-05-01_16-42-24-auto_width_1333.jpg",
      isBouquet: true,
      isFavorite: false,
    },
    {
      shopId: TheSecretGarden._id,
      name: "Соняшники (7 шт.)",
      price: 700,
      image:
        "https://kvitna.ua/image/cache/catalog/image/catalog/bouquets-of-sunflowers/6/scdn-com-images-products-1-7776-740613728-3427-1-7-sonyashnikiv-u-buketi-litni-sonechka.webp",
      isBouquet: false,
      isFavorite: false,
    },
    {
      shopId: TheSecretGarden._id,
      name: "Гортензії блакитні (5 шт.)",
      price: 1750,
      image:
        "https://uk.flower-market.dp.ua/image/cache/wp/cj/data/gortenziya/blue_hydrangea_dnipro_city-530x737w.webp",
      isBouquet: true,
      isFavorite: false,
    },
    {
      shopId: TheSecretGarden._id,
      name: "Букет ромашок (15 шт.)",
      price: 600,
      image:
        "https://flower-shop.com.ua/image/cache/catalog/bouquets/Romashki/15-romashek-new-600x600.jpg",
      isBouquet: true,
      isFavorite: false,
    },
    {
      shopId: TheSecretGarden._id,
      name: "Орхідея фаленопсис (1 гілка)",
      price: 850,
      image:
        "https://rozariy.com/image/cache/catalog/image/cache/catalog/demo/pot-flowers/orhideya-1v-fioletovyi-600x600.webp",
      isBouquet: false,
      isFavorite: false,
    },
    {
      shopId: TheSecretGarden._id,
      name: "Букет гвоздик (19 шт.)",
      price: 700,
      image:
        "https://sahar.gift/files/products/80b26bba1c982be7eae79e0238271ca0.600x500.png",
      isBouquet: true,
      isFavorite: false,
    },
    {
      shopId: TheSecretGarden._id,
      name: "Іриси фіолетові (11 шт.)",
      price: 950,
      image:
        "https://faial.h83.xyz/kvitoposhta/images/52c553b2-de43a9e7-93743f005dcfefeb.png",
      isBouquet: true,
      isFavorite: false,
    },
    {
      shopId: TheSecretGarden._id,
      name: "Букет 'Весняний аромат' (мікс)",
      price: 1150,
      image: "https://floren.com.ua/images/ins/b/buket-1-1739453282.jpg",
      isBouquet: true,
      isFavorite: false,
    },
    {
      shopId: TheSecretGarden._id,
      name: "Хризантеми жовті (15 шт.)",
      price: 850,
      image:
        "https://flower-power.com.ua/wp-content/uploads/2024/03/%D0%91%D1%83%D0%BA%D0%B5%D1%82-%D0%B8%D0%B7-%D0%B6%D0%B5%D0%BB%D1%82%D1%8B%D1%85-%D1%85%D1%80%D0%B8%D0%B7%D0%B0%D0%BD%D1%82%D0%B5%D0%BC-10-%D0%B2%D0%B5%D1%82%D0%BE%D0%BA-%D1%85%D1%80%D0%B8%D0%B7%D0%B0%D0%BD%D1%82%D0%B5%D0%BC-11000%D1%82%D0%B3-1-min-1.webp",
      isBouquet: true,
      isFavorite: false,
    },
    {
      shopId: TheSecretGarden._id,
      name: "Букет 'Ніжність' (троянди + лілії)",
      price: 1600,
      image:
        "https://flower-market.kiev.ua/image/cache/catalog/image/cache/data/nova_liniya/%20%D1%80%D0%BE%D0%B7%D1%8B-680x630.webp",
      isBouquet: true,
      isFavorite: false,
    },
    {
      shopId: TheSecretGarden._id,
      name: "Кали білі (7 шт.)",
      price: 1350,
      image:
        "https://buket24.dp.ua/files/resized/products/buket5-5.600x800.jpg",
      isBouquet: true,
      isFavorite: false,
    },

    {
      shopId: BloomStudio._id,
      name: "Троянди рожеві (21 шт.)",
      price: 1500,
      image:
        "https://content2.flowwow-images.com/data/flowers/524x524/47/1747433885_12736247.jpg",
      isBouquet: true,
      isFavorite: false,
    },
    {
      shopId: BloomStudio._id,
      name: "Букет 'Літній мікс'",
      price: 1100,
      image:
        "https://www.annetflowers.com.ua/image/cache/catalog/buket-v-shlyapnoy-korobke-letniy-miks-800x800.jpg",
      isBouquet: true,
      isFavorite: false,
    },
    {
      shopId: BloomStudio._id,
      name: "Альстромерії (11 шт.)",
      price: 950,
      image:
        "https://harmony.te.ua/image/cache/catalog/tovarfoto232/473/buket-z-11-g-lok-rozhevo-alstromer-1-600x600.jpg",
      isBouquet: true,
      isFavorite: false,
    },
    {
      shopId: BloomStudio._id,
      name: "Букет 'Ранкова роса' (м'які пастельні тони)",
      price: 1250,
      image:
        "https://buket.lviv.ua/image/cache/catalog/kvitu-new/buket-pion-romantika-3-500x500.jpg",
      isBouquet: true,
      isFavorite: false,
    },
    {
      shopId: BloomStudio._id,
      name: "Букет 'Осінній настрій'",
      price: 1350,
      image:
        "https://buket-express.ua/image/cache/catalog/img/gallery/583/409b63de6182926dd4236bd3ed348feba5-5298-479x471.jpg",
      isBouquet: true,
      isFavorite: false,
    },

    {
      shopId: SunshineFlowers._id,
      name: "Тюльпани білі (15 шт.)",
      price: 850,
      image: "https://flowersdelux.com.ua/wp-content/uploads/2018/11/1-6.jpg",
      isBouquet: true,
      isFavorite: false,
    },
    {
      shopId: SunshineFlowers._id,
      name: "Півонії червоні (7 шт.)",
      price: 1250,
      image: "https://viaflor.com.ua/edit/uploads/page/2486/66734c641d5de.jpg",
      isBouquet: true,
      isFavorite: false,
    },
    {
      shopId: SunshineFlowers._id,
      name: "Букет 'Класика'",
      price: 4750,
      image:
        "https://kvitka.od.ua/image/cache/catalog/kvitu-new/buket-101-troya-klasika-2-500x500.jpg",
      isBouquet: true,
      isFavorite: false,
    },
    {
      shopId: SunshineFlowers._id,
      name: "Хризантеми білі (11 шт.)",
      price: 900,
      image:
        "https://naporog.com.ua/sites/default/files/2022-06/11%20%D1%88%D1%82.jpg",
      isBouquet: true,
      isFavorite: false,
    },
    {
      shopId: SunshineFlowers._id,
      name: "Букет 'Фіолетова мрія'",
      price: 1550,
      image:
        "https://media.walldeco.ua/wp-content/uploads/20240429134213/s38083p-900x600.jpg",
      isBouquet: true,
      isFavorite: false,
    },
    {
      shopId: SunshineFlowers._id,
      name: "Соняшники (9 шт.)",
      price: 850,
      image:
        "https://static.lepestki.ua/filestorage/products/326/65167/main.jpg",
      isBouquet: true,
      isFavorite: false,
    },
    {
      shopId: SunshineFlowers._id,
      name: "Букет 'Елегантність' (стримані тони)",
      price: 1750,
      image: "https://flowers.ua/images/Flowers/articles/886-img-1.jpg",
      isBouquet: true,
      isFavorite: false,
    },
    {
      shopId: SunshineFlowers._id,
      name: "Кали рожеві (5 шт.)",
      price: 950,
      image:
        "https://camellia-market.com.ua/image/cache/catalog/importn/kally/kallarozovaja-auto_width_1333.jpg",
      isBouquet: true,
      isFavorite: false,
    },
    {
      shopId: SunshineFlowers._id,
      name: "Букет 'Лавандове щастя'",
      price: 1350,
      image: "https://elitbuket.com/wp-content/uploads/2020/07/img_9990.jpg",
      isBouquet: true,
      isFavorite: false,
    },

    {
      shopId: BloomBeyond._id,
      name: "Букет ромашок польових",
      price: 500,
      image:
        "https://troyandaflowers.com.ua/media/troyanda/troyanda/galley/image/media_250721_152322_CIoRPcJ.webp",
      isBouquet: true,
      isFavorite: false,
    },
    {
      shopId: BloomBeyond._id,
      name: "Лілії білі (9 шт.)",
      price: 1450,
      image:
        "https://naporog.com.ua/sites/default/files/2022-06/9%20%D0%B1%D0%B5%D0%BB%D1%8B%D1%85.jpg",
      isBouquet: true,
      isFavorite: false,
    },
    {
      shopId: BloomBeyond._id,
      name: "Букет 'Лісова казка' (зелений мікс)",
      price: 1600,
      image:
        "https://decorflowerbar.com.ua/cdn/shop/files/DSC07296.jpg?v=1706789266&width=1500",
      isBouquet: true,
      isFavorite: false,
    },
    {
      shopId: BloomBeyond._id,
      name: "Хризантеми рожеві (13 шт.)",
      price: 950,
      image:
        "https://florina.ua/image/cache/catalog/kategorii/cvety/hrizantemy/khrizantemy-kupidon-01-414x414.jpg",
      isBouquet: true,
      isFavorite: false,
    },
    {
      shopId: BloomBeyond._id,
      name: "Букет 'Зелена свіжість' (фоліаж + квіти)",
      price: 1250,
      image:
        "https://harmony.te.ua/image/catalog/tovarfoto232/233/buket-z-kv-t-v-zelena-hvilya-2.jpg",
      isBouquet: true,
      isFavorite: false,
    },
    {
      shopId: BloomBeyond._id,
      name: "Альстромерії рожеві (9 шт.)",
      price: 1150,
      image: "https://flori1.com/images/watermarked/1/detailed/2/8556.jpg",
      isBouquet: true,
      isFavorite: false,
    },
    {
      shopId: BloomBeyond._id,
      name: "Букет 'Ранковий бриз'",
      price: 1400,
      image:
        "https://rozariy.com/image/cache/catalog/image/cache/catalog/demo/buket-nevesti/pastel-600x600.webp",
      isBouquet: true,
      isFavorite: false,
    },

    {
      shopId: FlowerBoutique._id,
      name: "Троянди червоні (15 шт.)",
      price: 1350,
      image:
        "https://dicentra.ua/assets/images/products/1568/0f78436b0b1d03835922a7d6c971813e3c8afbd8.jpg",
      isBouquet: true,
      isFavorite: false,
    },
    {
      shopId: FlowerBoutique._id,
      name: "Тюльпани жовті (19 шт.)",
      price: 900,
      image:
        "https://osocorflowers.com/wp-content/uploads/2023/02/img_7562.png",
      isBouquet: true,
      isFavorite: false,
    },
    {
      shopId: FlowerBoutique._id,
      name: "Букет 'Романтика' (роза + півонії)",
      price: 1750,
      image:
        "https://static.lepestki.ua/filestorage/products/336/67146/main.jpg",
      isBouquet: true,
      isFavorite: false,
    },
    {
      shopId: FlowerBoutique._id,
      name: "Лілії рожеві (7 шт.)",
      price: 1450,
      image:
        "https://dicentra.ua/assets/images/products/3644/55ad09d4816ec33244efc620df3aef93ad829b5a.jpg",
      isBouquet: true,
      isFavorite: false,
    },
    {
      shopId: FlowerBoutique._id,
      name: "Букет 'Зимова магія'",
      price: 1800,
      image: "https://flowerstyle.com.ua/pic/images/IMG_9213.jpg",
      isBouquet: true,
      isFavorite: false,
    },
    {
      shopId: FlowerBoutique._id,
      name: "Букет 'Літній настрій' (яскраві тони)",
      price: 1250,
      image:
        "https://kvitna.ua/image/cache/catalog/image/cache/catalog/easyphoto/14891/yaskraviy-litniy-buket-z-zhorzhinami-lagidne-sonechko-3-1000x1000.webp",
      isBouquet: true,
      isFavorite: false,
    },
    {
      shopId: FlowerBoutique._id,
      name: "Букет 'Теплий вечір' (теплі відтінки)",
      price: 1650,
      image:
        "https://feriya.com.ua/wp-content/uploads/2024/10/osinni-barvi.jpg",
      isBouquet: true,
      isFavorite: false,
    },
    {
      shopId: FlowerBoutique._id,
      name: "Букет 'Весняний рай' (світлий мікс)",
      price: 1400,
      image:
        "https://www.annetflowers.com.ua/image/cache/catalog/LETO%20NEW/buket-miks-letnee-nastroenie-800x800.jpg",
      isBouquet: true,
      isFavorite: false,
    },
  ];

  await Product.insertMany(products);
  console.log("Seed data inserted");

  await mongoose.disconnect();
}

run().catch((err) => console.error(err));
