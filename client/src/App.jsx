import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShopProvider } from "./components/providers/context/ShopContext";

import Home from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Orders } from "./pages/Orders/Orders";
import { Contacts } from "./pages/Contact/Contacts";
import { Shopping } from "./pages/Shopping/Shopping";

function App() {
  useEffect(() => {
    fetch("https://flower-shop-8jgt.onrender.com/api/health").catch(() =>
      console.log("Backend still waking up...")
    );
  }, []);

  return (
    <ShopProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/:orderId" element={<Orders />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/shopping" element={<Shopping />} />
        </Routes>
      </Router>
    </ShopProvider>
  );
}

export default App;
