import { useContext } from "react";
import { ShopContext } from "../../components/providers/context/ShopContext";

export function Shop() {
  const { shops, selectedShop, setSelectedShop } = useContext(ShopContext);

  return (
    <>
      <aside className="w-full md:w-1/4 p-4 bg-bisque-200/10 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center text-black-500">
          Shops
        </h2>
        <ul className="space-y-2">
          {shops.map((shop) => (
            <li key={shop._id}>
              <button
                onClick={() => setSelectedShop(shop)}
                className={`w-full p-3 rounded-lg text-left transition-colors duration-200 hover:cursor-pointer ${
                  selectedShop && selectedShop._id === shop._id
                    ? "bg-yellow-700 text-white"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                {shop.name}
              </button>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
