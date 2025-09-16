import { Shop } from "./Shop";
import { ProductCards } from "./ProductCards";

export function ContentHome({
  shops,
  setShops,
  products,
  setProducts,
  backendUrl,
  selectedShop,
  setSelectedShop,
}) {
  return (
    <>
      <div className="flex flex-col md:flex-row min-h-screen bg-bisque-100">
        <Shop
          shops={shops}
          setShops={setShops}
          selectedShop={selectedShop}
          setSelectedShop={setSelectedShop}
          backendUrl={backendUrl}
        />
        <ProductCards
          products={products}
          setProducts={setProducts}
          selectedShop={selectedShop}
          backendUrl={backendUrl}
        />
      </div>
    </>
  );
}
