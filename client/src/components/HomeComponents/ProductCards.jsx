import { useState, useContext, useMemo } from "react";
import { ShopContext } from "../../components/providers/context/ShopContext";

import { ProductCardsItem } from "./ProductCardsItem";

export function ProductCards() {
  const { products, selectedShop } = useContext(ShopContext);

  const [sortBy, setSortBy] = useState("default");

  const sortedProducts = useMemo(() => {
    let sorted = [...products];

    if (sortBy === "price-asc") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sortBy === "date-new") {
      sorted.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
    } else if (sortBy === "date-old") {
      sorted.sort((a, b) => new Date(a.dateAdded) - new Date(b.dateAdded));
    }

    sorted.sort((a, b) => (b.isFavorite === true) - (a.isFavorite === true));

    return sorted;
  }, [products, sortBy]);

  return (
    <>
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Каталог квітів{selectedShop && ` | ${selectedShop.name}`}
        </h1>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border px-2 py-2 mb-4 rounded-md w-auto focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-opacity-50 focus:border-transparent"
        >
          <option value="default">Сортувати</option>
          <option value="price-asc">Ціна: від дешевих до дорогих</option>
          <option value="price-desc">Ціна: від дорогих до дешевих</option>
          <option value="date-new">Новіші спочатку</option>
          <option value="date-old">Старіші спочатку</option>
        </select>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedProducts.map((product) => (
            <div
              key={product._id}
              className="flex flex-col bg-bisque-200 p-4 rounded-lg shadow-md hover:shadow-neutral-500 transition-shadow duration-300"
            >
              <ProductCardsItem product={product} />
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
