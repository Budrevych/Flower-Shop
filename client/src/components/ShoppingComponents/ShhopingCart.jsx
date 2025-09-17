import { useContext } from "react";
import { ShopContext } from "../../components/providers/context/ShopContext";

export function ShoppingCart() {
  const { cart, removeFromCart, decreaseQuantity, addToCart } =
    useContext(ShopContext);

  return (
    <>
      <section
        className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3
              2xl:grid-cols-4 gap-6"
      >
        {cart.map((item, index) => (
          <div
            key={index}
            className="flex flex-col bg-bisque-200 p-4 rounded-lg shadow-md hover:shadow-neutral-500 transition-shadow duration-300"
          >
            <div className="w-full h-60 overflow-hidden rounded-md mb-4 sm:object-cover ">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="my-4">
              <h4 className="text-lg font-semibold py-2">{item.name}</h4>
              <p className="text-gray-600 my-2">
                {item.price * item.quantity} ₴
              </p>

              <div className="flex gap-2">
                <button
                  onClick={() => decreaseQuantity(item._id)}
                  className="px-3 py-1 bg-gray-300 rounded"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => addToCart(item)}
                  className="px-3 py-1 bg-gray-300 rounded"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item._id)}
                className="w-full px-4 py-2 mt-2 bg-yellow-700 text-white rounded-lg shadow hover:bg-yellow-700/65 transition-colors duration-200"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
