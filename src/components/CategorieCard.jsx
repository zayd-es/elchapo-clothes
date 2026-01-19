import React from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { toast } from "sonner";
import { useShoppingCartContext } from "./context/CartContext";
const CategorieCard = ({ product }) => {
  const { setCartItems } = useShoppingCartContext();
  const handleClick = (product) => {
    toast.success("Product added successfully");
    setCartItems((prev) => {
      return [...prev, product];
    });
  };
  return (
    <div>
      <div className="max-w-92 max-h-148 relative bg-[#1D1D1D] rounded-2xl p-2">
        <Link to={`/product/${product.documentId}`} className="block">
          {/* <div className="absolute right-6 bg-[#D62828] font-semibold capitalize py-1 px-4 rounded-md -top-2">
          new
        </div> */}
          <div className="h-62.5">
            <img
              className="w-full h-full object-cover rounded-2xl transition-transform duration-200 hover:scale-105"
              src={`${product.images[0].url}`}
              alt={product.name}
            />
          </div>
          <div className="flex justify-between items-center mt-4">
            <h3 className="text-[#D62828] text-[19px] font-bold">
              {product.price} DH
            </h3>
            <span className="flex items-center gap-1 ">
              <Rating
                className="text-yellow-200 "
                value={product?.rate || 0}
                sx={{
                  color: "#facc15",
                  "& .MuiRating-iconEmpty": {
                    color: "#cccccc",
                  },
                }}
                readOnly
                precision={0.5}
              />
            </span>
          </div>
          <hr className="border-t w-full border-gray-700 my-4" />
          <div>
            <div className="h-7">
              <h2 className="uppercase font-semibold text-[15px] font-poppins line-clamp-1">
                {product.name}
              </h2>
            </div>
          </div>
          <div className="flex flex-col my-4 gap-1 capitalize">
            <div className="flex items-center gap-1">
              <MdAccessTime className="text-[#D62828] text-[20px]" />
              <h3>{product.prepTime}</h3>
            </div>
            <div className="flex items-center gap-2">
              <FaRegCheckCircle className="text-[#D62828] text-[18px]" />
              <h3>{product.type}</h3>
            </div>
          </div>
        </Link>

        <div>
          <button
            onClick={() => handleClick(product)}
            // onClick={() => handleClick(product)}

            className="bg-green-400 cursor-pointer border-2 after:w-0 rounded-2xl mt-4 capitalize hover:bg-[#D62828] hover:after:w-full duration-200 ease-in-out border-gray-400 py-2 w-full"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategorieCard;
