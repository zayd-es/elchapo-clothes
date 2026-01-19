import { FaTrashAlt, FaPlus, FaMinus } from "react-icons/fa";
import { toast } from "sonner";
import { useShoppingCartContext } from "./context/CartContext";

const CartAddToCart = ({ item }) => {
  const { removeItemFromCart, addToCart } = useShoppingCartContext();

  const handleRemoveClick = () => {
    removeItemFromCart(item.id, item.selectedSize, item.selectedColor);
    toast.error("product removed", {
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
  };

  const updateQty = (num) => {
    if (item.quantity + num < 1) return;
    addToCart({ ...item, quantity: num });
  };
  const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:1337";

  return (
    <div data-aos="fade-up" className="mb-6 group">
      {/* --- DESKTOP VIEW --- */}

      {/* 2. Bold Price Display */}
      {/* --- MOBILE VIEW --- */}
      <div className="bg-[#0a0a0a] border border-zinc-800 p-4 rounded-3xl  flex flex-col gap-4">
        <div className="flex flex-wrap justify-center gap-4">
          <div className="w-24 h-24 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 flex-shrink-0">
            <img
              src={`${BASE_URL}${item.images[0]?.url}`}
              className="w-full h-full object-cover"
              alt={item.name}
            />
          </div>
          <div className="flex flex-col justisy-center py-1">
            <h2 className="text-white font-bold text-md leading-tight">
              {item.name}
            </h2>
            <div className="flex  w-fit flex-wrap justify-center  gap-2 pt-2">
              <span className="text-[9px] text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800 font-bold uppercase ">
                SIZE: {item.selectedSize}
              </span>
              <span className="text-[9px] text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800 font-bold uppercase ">
                COLOR: {item.selectedColor}
              </span>
            </div>
            <div className="flex justify-between py-1 px-5 bg-zinc-900 border border-zinc-800 rounded-xl w-fit mt-2">
              <button onClick={() => updateQty(-1)} className=" text-zinc-500">
                <FaMinus size={10} />
              </button>
              <span className="w-8 text-center text-white font-bold text-sm">
                {item.quantity}
              </span>
              <button onClick={() => updateQty(1)} className="  text-zinc-500">
                <FaPlus size={10} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex   gap-4 items-center justify-center sm:justify-between flex-wrap border-t border-zinc-800 pt-4">
          <div className="flex flex-col">
            <span className="text-white font-black text-xl">
              {item.price * item.quantity} DH
            </span>
            <span className="text-[10px] text-zinc-600 line-through">
              {item.firstPrice * item.quantity} DH
            </span>
          </div>
          <button
            onClick={handleRemoveClick}
            className="flex items-center gap-2 text-red-500 text-xs font-bold bg-red-500/10 px-4 py-2.5 rounded-xl border border-red-500/20"
          >
            <FaTrashAlt size={12} />
            REMOVE
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartAddToCart;
