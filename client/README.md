import { useEffect, useState } from "react";

export default function ProductsTest() {
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
const [waking, setWaking] = useState(false);

useEffect(() => {
const fetchProducts = async () => {
try {
const res = await fetch(
"https://flower-shop-8jgt.onrender.com/api/shops/68c7458bf8a58d81eb35432e/products"
);

        if (!res.ok) throw new Error("Сервер ще не відповідає");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.warn("Може сервер ще прокидається…", err);
        setWaking(true);

        // Пробуємо ще раз через 5 секунд
        setTimeout(fetchProducts, 5000);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();

}, []);

if (loading) return <p>Завантаження...</p>;
if (waking) return <p>Сервер прокидається... Спробуйте зачекати кілька секунд ⏳</p>;

return (
<div>
<h2>Продукти</h2>
<ul>
{products.map((p) => (
<li key={p._id}>
<img src={p.image} alt={p.name} width="150" />
<p>{p.name} – {p.price} грн</p>
</li>
))}
</ul>
</div>
);
}
