import { useState, useContext, useCallback } from "react";
import { ShopContext } from "../../components/providers/context/ShopContext";

import Favorite from "../../assets/img/Favorite.svg";
import Unfavorite from "../../assets/img/Unfavorite.svg";
export function ProductCardsItem({ product }) {
  const { setProducts, addToCart, favorites, toggleFavorite } =
    useContext(ShopContext);

  const [showToast, setShowToast] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);

  const isFavorite = favorites.includes(product._id);

  const onFavoriteClick = () => {
    toggleFavorite(product._id);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    setShowToast(true);
    setToastVisible(true);

    setTimeout(() => setToastVisible(false), 1300);
    setTimeout(() => setShowToast(false), 1600);
  };

  return (
    <>
      <div className="w-full h-80 overflow-hidden rounded-md mb-4 2xl:h-130">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain sm:object-cover"
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
          onClick={onFavoriteClick}
          className="w-5 h-5 cursor-pointer mb-2"
          src={isFavorite ? Favorite : Unfavorite}
          alt="isFavorite"
        />
      </div>

      <div className="relative flex flex-col items-start mt-2">
        <span className="text-2xl font-bold mb-2">{product.price} ₴</span>
        <button
          onClick={() => handleAddToCart(product)}
          className="w-full px-4 py-2 bg-yellow-700 text-white rounded-lg shadow hover:bg-yellow-700/65 transition-colors duration-200"
        >
          Додати в кошик
        </button>

        {showToast && (
          <div
            className={`absolute top-0 left-1/2 -translate-x-1/2 bg-orange-300 text-white px-4 py-2 rounded-md shadow-lg mt-2 transition-all duration-300 ease-in-out
            ${
              toastVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-3"
            }`}
          >
            Додано до кошика!
          </div>
        )}
      </div>
    </>
  );
}
