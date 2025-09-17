import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../components/providers/context/ShopContext";

import { Header } from "../../components/HomeComponents/Header";

export function Orders() {
  const { backendUrl } = useContext(ShopContext);
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (orderId) {
      fetch(`${backendUrl}/api/orders/${orderId}`)
        .then((res) => {
          if (!res.ok) throw new Error("Order not found");
          return res.json();
        })
        .then((data) => setOrder(data))
        .catch((err) => setError(err.message));
    }
  }, [orderId]);

  const handleSearch = async (e) => {
    e.preventDefault();
    setError("");
    setOrder(null);

    try {
      let res = await fetch(`${backendUrl}/api/orders/${searchInput}`);
      if (!res.ok) {
        res = await fetch(
          `${backendUrl}/api/orders?email=${encodeURIComponent(searchInput)}`
        );
        if (!res.ok) throw new Error("Order not found");
      }
      const data = await res.json();

      setOrder(Array.isArray(data) ? data[0] : data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <Header />
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Order
        </h1>

        {!order && (
          <form onSubmit={handleSearch} className="mb-6">
            <label className="block mb-2 text-gray-700">
              Enter Order ID or Email:
            </label>
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="w-full p-2 border rounded-md mb-2"
            />
            <button
              type="submit"
              className="w-full p-2 bg-yellow-700 text-white rounded-md hover:bg-yellow-800"
            >
              Search
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </form>
        )}

        {order && (
          <div className="border rounded-lg p-6 shadow-md bg-bisque-100">
            <h2 className="text-2xl font-semibold mb-4">
              Order ID: {order._id}
            </h2>
            <h3 className="mb-2">
              <strong>Shop:</strong> {order.shopName}
            </h3>
            <p className="mb-2">
              <strong>Name:</strong> {order.name}
            </p>
            <p className="mb-2">
              <strong>Email:</strong> {order.email}
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> {order.phone}
            </p>
            <p className="mb-2">
              <strong>Address:</strong> {order.address}
            </p>
            <p className="mb-4">
              <strong>Total:</strong> {order.total} ₴
            </p>
            <p className="mb-4">
              <strong>Date:</strong>{" "}
              {new Date(order.createdAt).toLocaleString("uk-UA")}
            </p>

            <h3 className="text-xl font-semibold mb-2">Items:</h3>
            <ul className="list-disc list-inside">
              {order.items.map((item) => (
                <li key={item._id}>
                  {item.name} × {item.quantity} = {item.price * item.quantity} ₴
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
