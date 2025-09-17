import { FormCart } from "./FormCart";

export function DeliveryFormBlock() {
  return (
    <>
      <aside className="w-full md:w-1/2 p-4 bg-bisque-200/10 shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Delivery Form
        </h1>
        <FormCart />
      </aside>
    </>
  );
}
