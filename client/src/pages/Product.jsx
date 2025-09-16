// src/App.jsx
import React, { useState, useEffect } from "react";

function Home() {
  const [shops, setShops] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedShop, setSelectedShop] = useState(null);
  const backendUrl = "https://flower-shop-8jgt.onrender.com"; // Ваша URL-адреса бекенду на Render

  useEffect(() => {
    // Завантажуємо список магазинів при першому рендері
    fetch(`${backendUrl}/api/shops`)
      .then((res) => res.json())
      .then((data) => {
        setShops(data);
        if (data.length > 0) {
          // Обираємо перший магазин за замовчуванням
          setSelectedShop(data[0]);
        }
      })
      .catch((error) => console.error("Error fetching shops:", error));
  }, []);

  useEffect(() => {
    // Завантажуємо продукти, коли обраний магазин змінюється
    if (selectedShop) {
      fetch(`${backendUrl}/api/shops/${selectedShop._id}/products`)
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error("Error fetching products:", error));
    }
  }, [selectedShop]);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-bisque-100">
      {/* Sidebar з магазинами */}
      <aside className="w-full md:w-1/4 p-4 bg-bisque-200/10 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center text-black-500">
          Магазини
        </h2>
        <ul className="space-y-2">
          {shops.map((shop) => (
            <li key={shop._id}>
              <button
                onClick={() => setSelectedShop(shop)}
                className={`w-full p-3 rounded-lg text-left transition-colors duration-200 ${
                  selectedShop && selectedShop._id === shop._id
                    ? "bg-cyan-600 text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                {shop.name}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Основний контент з продуктами */}
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Каталог квітів{selectedShop && ` | ${selectedShop.name}`}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-bisque-200 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-68 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">
                {product.isBouquet ? "Букет" : "Квітка"}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-green-600">
                  {product.price} ₴
                </span>
                <button className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition-colors duration-200">
                  Додати в кошик
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;
