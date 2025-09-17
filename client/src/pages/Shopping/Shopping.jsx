import { useContext } from "react";
import { ShopContext } from "../../components/providers/context/ShopContext";

import { Header } from "../../components/HomeComponents/Header";
import { DeliveryFormBlock } from "../../components/ShoppingComponents/DeliveryFormBlock";
import { ShoppingCart } from "../../components/ShoppingComponents/ShhopingCart";
export function Shopping() {
  const { cart } = useContext(ShopContext);
  return (
    <>
      <Header />
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Shopping
      </h1>

      <div className="flex flex-col md:flex-row min-h-screen bg-bisque-100">
        <DeliveryFormBlock />
        <div className="flex-1 p-6">
          {cart.length === 0 ? (
            <p className="text-center text-gray-600">Ваш кошик порожній</p>
          ) : (
            <ShoppingCart />
          )}
        </div>
        ;
      </div>
    </>
  );
}
