// components/ProductDialog.jsx
import React from "react";
import { IoCartOutline } from "react-icons/io5";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { useShoppingCartContext } from "./context/CartContext";

const ProductDialog = ({ product, isOpen, onClose }) => {
  const { setCartItems } = useShoppingCartContext();
  if (!product) return null;
  const handleAddToCart = () => {
    toast.success("Action completed successfully!", {
      position: "top-right",

      style: {
        "--normal-bg":
          "light-dark(var(--color-green-600), var(--color-green-400))",
        "--normal-text": "var(--color-white)",
        "--normal-border":
          "light-dark(var(--color-green-600), var(--color-green-400))",
      },
    });

    setCartItems((prev) => {
      return [...prev, product];
    });
  };
  return (
    <div>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className=" bg-gray-200">
          <DialogTitle className="sr-only absolute">
            Product Details: {product.name}
          </DialogTitle>

          {/* Product Info */}
          <div className="flex gap-4 py-4 ">
            <div className="h-48 w-full overflow-hidden rounded-lg">
              <img
                className="w-full h-full object-cover"
                src={
                  product.images?.[0]?.url
                    ? `${import.meta.env.VITE_API_URL}${product.images[0].url}`
                    : "https://via.placeholder.com/384x192?text=No+Image"
                }
                alt={product.name}
              />
            </div>

            <div className="space-y-3">
              <h3 className="font-bold text-xl">{product.name}</h3>
              <div className="flex items-center justify-between">
                <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">
                  {product.category?.name}
                </span>
                <div className="flex items-center gap-2">
                  {product.firstPrice && (
                    <span className="text-gray-400 line-through text-sm">
                      {product.firstPrice} DH
                    </span>
                  )}
                  <span className="font-bold text-lg text-black">
                    {product.price} DH
                  </span>
                </div>
              </div>

              <p className="text-gray-600 text-sm mt-2">
                This is a premium quality product from our new arrivals
                collection.
              </p>
            </div>
          </div>

          {/* Dialog Actions */}
          <div className="flex gap-3 pt-4 border-t">
            <button
              onClick={onClose}
              className="flex-1 py-2.5 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Close
            </button>
            <button
              onClick={handleAddToCart}
              className="flex-1 py-2.5 px-4 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium flex items-center justify-center gap-2"
            >
              <IoCartOutline className="w-5 h-5" />
              Add to Cart
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductDialog;
