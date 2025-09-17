import { useContext } from "react";
import { ShopContext } from "../../components/providers/context/ShopContext";

import { Header } from "../../components/HomeComponents/Header";
import { ContentHome } from "../../components/HomeComponents/ContentHome";

function Home() {
  const {
    shops,
    setShops,
    products,
    setProducts,
    selectedShop,
    setSelectedShop,
    backendUrl,
  } = useContext(ShopContext);

  return (
    <>
      <Header />
      <ContentHome
        shops={shops}
        setShops={setShops}
        products={products}
        setProducts={setProducts}
        backendUrl={backendUrl}
        selectedShop={selectedShop}
        setSelectedShop={setSelectedShop}
      />
    </>
  );
}

export default Home;
