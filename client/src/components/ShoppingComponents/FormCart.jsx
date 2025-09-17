import { useState, useContext } from "react";
import { ShopContext } from "../../components/providers/context/ShopContext";
import { useNavigate } from "react-router-dom";

export function FormCart() {
  const { cart, getTotal, selectedShop, backendUrl, setCart } =
    useContext(ShopContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[\w.-]+@[\w.-]+\.\w+$/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.address.trim()) newErrors.address = "Address is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const orderData = {
      shopId: selectedShop?._id,
      shopName: selectedShop?.name,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      items: cart,
      total: getTotal(),
    };

    try {
      const response = await fetch(`${backendUrl}/api/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) throw new Error("Order submission failed");

      const data = await response.json();
      console.log("Order successfully created:", data);
      alert("Order placed successfully!");

      setCart([]);
      navigate(`/orders/${data._id}`);
    } catch (err) {
      console.error(err);
      alert("Error placing order");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-700 ${
            errors.name ? "border-red-500" : ""
          }`}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-700 ${
            errors.email ? "border-red-500" : ""
          }`}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-700 ${
            errors.phone ? "border-red-500" : ""
          }`}
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="address" className="block text-gray-700">
          Address
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className={`w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-700 ${
            errors.address ? "border-red-500" : ""
          }`}
        />
        {errors.address && (
          <p className="text-red-500 text-sm">{errors.address}</p>
        )}
      </div>

      {cart.length > 0 && (
        <div className="my-6 text-2xl font-family">Sum: {getTotal()} ₴</div>
      )}

      <button
        type="submit"
        className="w-full p-3 bg-yellow-700 text-white rounded-lg hover:bg-yellow-800 transition-colors duration-200"
      >
        Place Order
      </button>
    </form>
  );
}
