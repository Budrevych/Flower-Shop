import { useContext } from "react";
import { ShopContext } from "../../components/providers/context/ShopContext";

import { Header } from "../../components/HomeComponents/Header";

export function Contacts() {
  const { shops } = useContext(ShopContext);

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
        <section>
          {shops.map((shop) => (
            <div
              key={shop._id}
              className="mb-6 p-4 border rounded-lg shadow font-family"
            >
              <h4 className="text-xl font-semibold">{shop.name}</h4>
              <p>📍 {shop.address}</p>
              <a href="tel:+380977665544" className="block">
                📞 +38 (097) 76 65 544
              </a>
              <a href={`mailto:${shop.name}@example.com`} className="block">
                📬 {shop.name}@example.com
              </a>
              <p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${shop.lat},${shop.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-700 underline"
                >
                  📍 Відкрити на мапі
                </a>
              </p>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
