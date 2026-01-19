import React, { useState } from "react";
import { useShoppingCartContext } from "./context/CartContext";
import axios from "axios";

const Checkout = () => {
  const { cartItems, getTotalPrice, clearCart } = useShoppingCartContext();
  const [loading, setLoading] = useState(false);
  const [orderDone, setOrderDone] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    city: "",
    address: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // تأكد أن أسماء الحقول هنا (FullName, Phone...) هي نفسها API ID في Strapi
    const orderData = {
      data: {
        FullName: formData.fullName,
        Phone: formData.phone,
        Address: `${formData.city} - ${formData.address}`,
        TotalPrice: Number(getTotalPrice()),
        // هنا كنصيفطو غير المعلومات اللي غاتحتاج باش توجد الكولي
        CartItems: cartItems.map((item) => ({
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          size: item.selectedSize, // القياس اللي ختار
          color: item.selectedColor, // اللون اللي ختار
          totalPrice: Number(item.price) * Number(item.quantity),
        })),
        OrderStatus: "pending",
      },
    };

    try {
      await axios.post(
        ` ${import.meta.env.VITE_API_URL}/api/orders`,
        orderData
      );
      clearCart();
      setOrderDone(true);
    } catch (error) {
      console.log("Full Message:", error.response?.data?.error?.message);
      console.log("Detailed Info:", error.response?.data?.error?.details);

      alert("Error from Strapi: " + error.response?.data?.error?.message);

      alert("Check console for the exact broken field!");
    } finally {
      setLoading(false);
    }
  };

  if (orderDone)
    return (
      <div className="h-screen flex flex-col items-center justify-center text-center p-6">
        <h2 className="text-4xl font-black mb-4 uppercase">شكراً على طلبك!</h2>
        <p className="text-zinc-500 tracking-widest uppercase text-sm">
          ELCHAPO44 غادي يتصلوا بيك قريباً لتأكيد الطلب.
        </p>
      </div>
    );

  return (
    <div className="max-w-[1200px] mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
      {/* Form (اليسار) */}
      <div className="space-y-8">
        <h2 className="text-3xl font-black uppercase tracking-tighter">
          معلومات التوصيل
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            required
            placeholder="الاسم الكامل"
            className="w-full border-b border-black py-3 outline-none uppercase text-sm"
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
          />
          <input
            required
            placeholder="رقم الهاتف"
            className="w-full border-b border-black py-3 outline-none uppercase text-sm"
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
          <input
            required
            placeholder="المدينة"
            className="w-full border-b border-black py-3 outline-none uppercase text-sm"
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          />
          <textarea
            required
            placeholder="العنوان الكامل"
            className="w-full border-b border-black py-3 outline-none uppercase text-sm h-24"
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-4 font-black uppercase tracking-widest hover:bg-zinc-800 transition-all"
          >
            {loading ? "جاري الإرسال..." : "تأكيد الطلب - الدفع عند الاستلام"}
          </button>
        </form>
      </div>

      {/* Summary (اليمين) */}
      <div className="bg-zinc-50 p-8 h-fit">
        <h3 className="font-black uppercase mb-6">ملخص الطلب</h3>
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between py-2 border-b border-zinc-200 text-sm uppercase"
          >
            <span>
              {item.name} (x{item.quantity})
            </span>
            <span className="font-bold">{item.price} DH</span>
          </div>
        ))}
        <div className="flex justify-between pt-6 text-xl font-black uppercase">
          <span>{getTotalPrice()} DH</span>
          <span>المجموع</span>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
