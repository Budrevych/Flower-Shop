import { useContext } from "react";
import { ShopContext } from "../../components/providers/context/ShopContext";

import { Header } from "../../components/HomeComponents/Header";

export function Contacts() {
  const { shops, selectedShop, setSelectedShop } = useContext(ShopContext);

  return (
    <>
      <Header />
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Contacts
      </h1>
      <div className="mx-8">
        <h2 className="text-2xl font-bold mb-4  text-black-500 font-family">
          Shops:
        </h2>
      </div>
    </>
  );
}

{
  /* <div>
  <h2 className="text-2xl font-bold mb-4 text-center text-black-500">Shops</h2>
  <ul className="space-y-2">
    {Array.isArray(shops) &&
      shops.map((shop) => (
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
</div>; */
}
