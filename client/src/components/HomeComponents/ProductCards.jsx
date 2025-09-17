import { useContext, useCallback } from "react";
import { ShopContext } from "../../components/providers/context/ShopContext";

import Favorite from "../../assets/img/Favorite.svg";
import Unfavorite from "../../assets/img/Unfavorite.svg";

export function ProductCards() {
  const { products, setProducts, selectedShop } = useContext(ShopContext);

  const onFavoriteClick = useCallback((id) => {
    setProducts((products) =>
      products.map((item) =>
        item._id !== id ? item : { ...item, isFavorite: !item.isFavorite }
      )
    );
  }, []);

  return (
    <>
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Каталог квітів{selectedShop && ` | ${selectedShop.name}`}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="flex flex-col bg-bisque-200 p-4 rounded-lg shadow-md hover:shadow-neutral-500 transition-shadow duration-300"
            >
              <div className="w-full h-60 overflow-hidden rounded-md mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain bg-white sm:object-cover"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-2">
                  {product.isBouquet ? "Букет" : "Квітка"}
                </p>
                <p className="text-gray-600 mb-2">
                  {new Date(product.dateAdded).toLocaleString("uk-UA", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
                <img
                  onClick={() => onFavoriteClick(product._id)}
                  className="w-5 h-5 cursor-pointer mb-2"
                  src={product.isFavorite ? Favorite : Unfavorite}
                  alt="isFavorite"
                />
              </div>

              <div className="flex flex-col items-start mt-2">
                <span className="text-2xl font-bold mb-2">
                  {product.price} ₴
                </span>
                <button className="w-full px-4 py-2 bg-yellow-700 text-white rounded-lg shadow hover:bg-yellow-700/65 transition-colors duration-200">
                  Додати в кошик
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
