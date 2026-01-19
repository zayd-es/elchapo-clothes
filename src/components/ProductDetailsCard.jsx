import React, { useEffect } from "react";
import { toast } from "sonner";
import { useShoppingCartContext } from "./context/CartContext";
import { FiPlus, FiMinus, FiShoppingBag } from "react-icons/fi";
import Aos from "aos";

const ProductDetailsCard = ({ product }) => {
  const { productSelection, setProductSelection, addToCart } =
    useShoppingCartContext();
  const { selectedImage, selectedSize, selectedColor, quantity } =
    productSelection;

  const updateSelection = (field, value) => {
    setProductSelection((prev) => ({ ...prev, [field]: value }));
  };

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true, // هادي اختيارية: كتخلي الـ Animation يوقع غير مرة وحدة ملي تهبط وتطلع
    });
  }, []);
  if (!product || !product.images) return null;

  const handleAddToCart = () => {
    if (product.sizes?.length > 0 && !selectedSize) {
      toast.error("Please select a size", {
        position: "top-center",
        duration: 3000,
        style: {
          background: "#000000", // Pure black
          color: "#ffffff", // White text
          border: "1px solid #ef4444", // Red border for error
          borderRadius: "16px", // Smooth rounded corners
          padding: "16px 24px",
          fontSize: "15px",
          fontWeight: "600",
          letterSpacing: "-0.02em",
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.5)",
        },
        // Adding a custom icon makes it look more professional
        icon: <span className="text-red-500">✕</span>,
      });
      return;
    }
    if (product.sizes?.length > 0 && !selectedColor) {
      toast.error("Please select a color", {
        position: "top-center",
        duration: 3000,
        style: {
          background: "#000000", // Pure black
          color: "#ffffff", // White text
          border: "1px solid #ef4444", // Red border for error
          borderRadius: "16px", // Smooth rounded corners
          padding: "16px 24px",
          fontSize: "15px",
          fontWeight: "600",
          letterSpacing: "-0.02em",
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.5)",
        },
        // Adding a custom icon makes it look more professional
        icon: <span className="text-red-500">✕</span>,
      });
      return;
    }
    addToCart({ ...product, selectedSize, selectedColor, quantity });
    toast.success("Added to cart!", {
      position: "top-center",
      duration: 3000,
      style: {
        background: "#000000", // Pure black to match your UI
        color: "#ffffff", // White text
        border: "1px solid #22c55e", // Elegant green border
        borderRadius: "16px",
        padding: "16px 24px",
        fontSize: "15px",
        fontWeight: "600",
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.4)",
      },
      // Using a clean checkmark icon
      icon: (
        <div className="bg-green-500/20 p-1 rounded-full">
          <svg
            className="w-4 h-4 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
      ),
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 lg:py-12">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* --- LEFT SIDE: IMAGE SECTION --- */}
        <div className="w-full lg:w-[55%] space-y-4">
          {/* Main Large Image Container */}
          <div
            data-aos="zoom-in"
            className="relative  w-full rounded-[2.5rem] overflow-hidden bg-zinc-50 border border-zinc-100 group shadow-sm"
          >
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              src={`${product.images[selectedImage]?.url}`}
              alt={product.name}
            />
            {/* Discount Badge overlay */}
            <div className="absolute top-3   left-5 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-md z-10">
              NEW
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar px-2">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => updateSelection("selectedImage", i)}
                className={`relative flex-shrink-0 w-20 h-24 sm:w-24 sm:h-32 rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                  selectedImage === i
                    ? "border-black scale-95 shadow-md"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={`${img.url}`}
                  className="object-cover w-full h-full"
                  alt={`Thumbnail ${i}`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* --- RIGHT SIDE: PRODUCT INFO --- */}
        <div className="w-full lg:w-[45%] space-y-8">
          <div data-aos="fade-left">
            <h1 className="text-4xl sm:text-5xl font-black text-zinc-900 tracking-tighter leading-none mb-4">
              {product.name}
            </h1>
            <div className="flex items-center gap-4">
              <p className="text-3xl font-black text-black">
                {product.price} <span className="text-sm">DH</span>
              </p>
              {product.firstPrice && (
                <p className="text-xl text-zinc-400 line-through font-medium">
                  {product.firstPrice} DH
                </p>
              )}
            </div>
          </div>

          <hr className="border-zinc-100" />

          {/* Sizes */}
          <div data-aos="fade-right" className="space-y-4">
            <h3 className="text-xs font-black uppercase tracking-widest text-zinc-400">
              Select Size
            </h3>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s, i) => (
                <button
                  key={i}
                  onClick={() => updateSelection("selectedSize", s.size)}
                  className={`h-12 min-w-[60px] px-4 border-2 rounded-2xl font-bold transition-all ${
                    selectedSize === s.size
                      ? "bg-black border-black text-white shadow-xl translate-y-[-2px]"
                      : "bg-white border-zinc-100 text-zinc-600 hover:border-zinc-300"
                  }`}
                >
                  {s.size}
                </button>
              ))}
            </div>
          </div>

          {/* Colors */}
          {product.colors && product.colors.length > 0 && (
            <div data-aos="fade-right" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-xs font-black uppercase tracking-widest text-zinc-400">
                  Select Color
                </h3>
                {/* Optional: Shows the name of what is currently selected */}
              </div>

              <div className="flex flex-wrap gap-4">
                {product.colors.map((c, i) => (
                  <button
                    key={i}
                    type="button" // Prevents accidental form submits
                    title={c.color} // Tooltip on hover
                    onClick={() => updateSelection("selectedColor", c.color)}
                    className={`w-10 h-10 rounded-full border-2 p-0.5 transition-all duration-300 ${
                      selectedColor === c.color
                        ? "border-black scale-110 shadow-md"
                        : "border-transparent hover:border-zinc-200"
                    }`}
                  >
                    <div
                      className="w-full h-full rounded-full border border-black/5"
                      style={{ backgroundColor: c.color }}
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity & Button */}
          <div data-aos="fade-left" className="flex flex-col gap-4 pt-6">
            <div className="flex items-center bg-zinc-100 w-fit rounded-2xl p-1.5 border border-zinc-200">
              <button
                className="w-10 h-10 flex items-center justify-center hover:bg-white rounded-xl transition-all"
                onClick={() =>
                  updateSelection("quantity", Math.max(1, quantity - 1))
                }
              >
                <FiMinus />
              </button>
              <span className="w-12 text-center font-black text-lg">
                {quantity}
              </span>
              <button
                className="w-10 h-10 flex items-center justify-center hover:bg-white rounded-xl transition-all"
                onClick={() =>
                  updateSelection(
                    "quantity",
                    Math.min(product.quantity || 10, quantity + 1)
                  )
                }
              >
                <FiPlus />
              </button>
            </div>

            <button
              data-aos="zoom-in"
              onClick={handleAddToCart}
              className=" h-16 bg-green-500 text-white addtocart-pulse rounded-2xl font-black text-[15px] sm:text-lg flex items-center justify-center gap-3 hover:bg-green-400 transition-all shadow-2xl active:scale-[0.98]"
            >
              <FiShoppingBag className="text-xl" />
              ADD TO CART — {product.price * quantity} DH
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
