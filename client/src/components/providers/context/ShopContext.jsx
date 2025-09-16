import { createContext, useState, useEffect } from "react";

export const ShopContext = createContext();

export function ShopProvider({ children }) {
  const backendUrl = "https://flower-shop-8jgt.onrender.com";

  const [shops, setShops] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedShop, setSelectedShop] = useState(null);

  useEffect(() => {
    fetch(`${backendUrl}/api/shops`)
      .then((res) => res.json())
      .then((data) => {
        setShops(data);
        if (data.length > 0) {
          setSelectedShop(data[0]);
        }
      })
      .catch((error) => console.error("Error fetching shops:", error));
  }, []);

  useEffect(() => {
    if (selectedShop) {
      fetch(`${backendUrl}/api/shops/${selectedShop._id}/products`)
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error("Error fetching products:", error));
    }
  }, [selectedShop]);

  return (
    <ShopContext.Provider
      value={{
        shops,
        setShops,
        products,
        setProducts,
        backendUrl,
        selectedShop,
        setSelectedShop,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}
