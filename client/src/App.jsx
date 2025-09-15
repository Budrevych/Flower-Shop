import { useState, useEffect } from "react";
import Products from "./pages/Product";
import Home from "./pages/Home";

function App() {
  useEffect(() => {
    fetch("https://flower-shop-8jgt.onrender.com/api/health").catch(() =>
      console.log("Backend still waking up...")
    );
  }, []);
  return (
    <>
      {/* <Products />
      <hr />
      <Home /> */}
    </>
  );
}

export default App;
