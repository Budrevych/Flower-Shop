import { createContext, useState, useEffect } from "react";

export const ShopContext = createContext();

export function ShopProvider({ children }) {
  const backendUrl = "https://flower-shop-8jgt.onrender.com";

  const [shops, setShops] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedShop, setSelectedShop] = useState(null);

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item._id === product._id);

      let updated;
      if (existing) {
        updated = prev.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updated = [...prev, { ...product, quantity: 1 }];
      }

      localStorage.setItem("cart", JSON.stringify(updated));
      return updated;
    });
  };

  const removeFromCart = (productId) => {
    setCart((prev) => {
      const updated = prev.filter((item) => item._id !== productId);
      localStorage.setItem("cart", JSON.stringify(updated));
      return updated;
    });
  };

  const decreaseQuantity = (productId) => {
    setCart((prev) => {
      let updated = prev
        .map((item) =>
          item._id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0);

      localStorage.setItem("cart", JSON.stringify(updated));
      return updated;
    });
  };

  const getTotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

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

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

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
        cart,
        setCart,
        addToCart,
        removeFromCart,
        decreaseQuantity,
        getTotal,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}
