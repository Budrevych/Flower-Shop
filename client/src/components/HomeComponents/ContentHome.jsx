import { Shop } from "./Shop";
import { ProductCards } from "./ProductCards";

export function ContentHome() {
  return (
    <>
      <div className="flex flex-col md:flex-row min-h-screen bg-bisque-100">
        <Shop />
        <ProductCards />
      </div>
    </>
  );
}
