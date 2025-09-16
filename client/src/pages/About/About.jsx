import { Header } from "../../components/HomeComponents/Header";

export function About() {
  return (
    <>
      <Header />
      <section className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
          About Us
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
          Ласкаво просимо до <span className="font-semibold">Flower Shop</span>{" "}
          🌸 — місця, де квіти говорять замість слів. Ми співпрацюємо з
          найкращими локальними магазинами, щоб ви завжди могли знайти свіжі та
          оригінальні букети для будь-якої нагоди.
        </p>

        <div className="bg-gray-50 rounded-2xl shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
            Наші цінності
          </h2>
          <ul className="space-y-3 text-lg text-gray-700">
            <li>
              🌿 <span className="font-medium">Свіжість</span> та якість кожної
              квітки
            </li>
            <li>
              🚚 <span className="font-medium">Зручна доставка</span> прямо до
              ваших дверей
            </li>
            <li>
              💌 <span className="font-medium">Індивідуальний підхід</span> до
              кожного замовлення
            </li>
          </ul>
        </div>

        <p className="text-lg text-gray-700 leading-relaxed text-center">
          Ми віримо, що квіти створюють атмосферу радості та турботи 🌼 і
          прагнемо зробити цей момент особливим для вас.
        </p>
      </section>
    </>
  );
}
