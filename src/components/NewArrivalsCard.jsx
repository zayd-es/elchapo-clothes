import React, { useState } from "react";
import { FaEye } from "react-icons/fa";

import { Link } from "react-router-dom";

const NewArrivalsCard = ({ product, isNew }) => {
  const [isHovered, setIsHovered] = useState(false);
  const getImgUrl = (index) => {
    if (!product.images || !product.images[index])
      return "https://via.placeholder.com/600x800?text=ELCHAPO44";
    return `http://localhost:1337${product.images[index].url}`;
  };
  return (
    <div
      className="group relative bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        to={`/product/${product.documentId}`}
        className="block overflow-hidden relative"
      >
        {/* Subtle Luxury Badge */}
        {isNew && (
          <div className="absolute top-4 left-4 bg-black text-white text-[9px] font-black px-3 py-1.5 tracking-[0.2em] z-20">
            NEW
          </div>
        )}

        {/* Image Container with Smooth Swap */}
        <div className="relative aspect-[3/4] overflow-hidden bg-zinc-50">
          <img
            className={`w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
              isHovered && product.images[1] ? "opacity-0" : "opacity-100"
            }`}
            src={getImgUrl(0)}
            alt={product.name}
          />
          {product.images[1] && (
            <img
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
              src={getImgUrl(1)}
              alt={`${product.name} detail`}
            />
          )}

          {/* "Quick View" Overlay - Appears on Hover */}
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <div className="w-full bg-white/90 backdrop-blur-sm py-3 text-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] flex items-center justify-center gap-2">
                <FaEye size={12} /> Quick View
              </span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="pt-6 pb-4 space-y-1">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-[10px] text-zinc-400 uppercase tracking-widest font-bold">
                {product.category?.name || "Streetwear"}
              </p>
              <h3 className="text-sm font-bold uppercase tracking-tight text-black mt-1">
                {product.name}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <span className="text-sm font-black text-black">
              {product.price} DH
            </span>
            {product.firstPrice && (
              <span className="text-[11px] text-zinc-400 line-through tracking-tighter">
                {product.firstPrice} DH
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NewArrivalsCard;
