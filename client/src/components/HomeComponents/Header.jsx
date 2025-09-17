import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { ShopContext } from "../../components/providers/context/ShopContext";

import Shopping from "../../assets/img/Shopping.svg";

export function Header() {
  const { cart } = useContext(ShopContext);
  const [isOpen, setIsOpen] = useState(false);

  const cartCount = cart.length;

  return (
    <header>
      <div className="pt-10">
        <img
          className="w-40 h-40 mx-auto"
          src="../../public/Flower-shop-Logo.svg"
          alt="Flower Shop Logo"
        />
      </div>
      <h1 className="text-center text-4xl pb-5">FLOWER SHOP</h1>

      <div className="sm:hidden flex justify-center pb-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl border p-2 rounded"
        >
          ☰
        </button>
      </div>

      <div className={`pb-10 ${isOpen ? "block" : "hidden"} sm:block`}>
        <ul className="flex gap-5 pt-10 sm:flex-row justify-center sm:gap-10 font-family">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
          <li className="relative">
            <Link to="/shopping">
              <img className="w-6 h-6" src={Shopping} alt="Shopping" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-700 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
