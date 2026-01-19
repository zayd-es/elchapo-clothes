import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerDescription, // Add this import
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai";
import { Button } from "./ui/button";

import { Link } from "react-router-dom";
import { FaBasketShopping } from "react-icons/fa6";
import { useShoppingCartContext } from "./context/CartContext";
import CartAddToCart from "./CartAddToCart";

const CartDrawer = () => {
  const { cartItems } = useShoppingCartContext();

  return (
    <div className="relative text-black">
      <Drawer direction="right">
        <DrawerTrigger asChild>
          <Button className="cursor-pointer  text-white bg-black ">
            <AiOutlineShoppingCart className="text-3xl" />

            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center  justify-center rounded-full bg-red-500 text-xs text-white">
              {cartItems.length}
            </span>
          </Button>
        </DrawerTrigger>
        <DrawerContent className="top-0 right-0 left-auto h-full max-h-screen w-full bg-gray-100 max-w-md mt-0 rounded-none rounded-l-lg">
          <div className="flex flex-col h-full">
            {/* Header */}
            <DrawerHeader className="border-b">
              <div className="flex items-center justify-between">
                <DrawerTitle className="text-2xl text-black">
                  Your Cart
                </DrawerTitle>
                <DrawerClose asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <AiOutlineClose className="h-4 w-4 text-black" />
                  </Button>
                </DrawerClose>
              </div>
            </DrawerHeader>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-4">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <AiOutlineShoppingCart className="h-16 w-16 text-gray-300 mb-4" />
                  <h3 className="text-lg font-medium text-gray-700">
                    Your cart is empty
                  </h3>
                  <p className="text-gray-500 mt-1">
                    Add some items to get started
                  </p>
                  <Link
                    to={"/"}
                    className="pt-2 text-xl flex items-center capitalize text-blue-600 hover:text-blue-400 gap-1"
                  >
                    <p>back to</p>
                    <h3>
                      <FaBasketShopping />
                    </h3>
                  </Link>
                </div>
              ) : (
                <div>
                  {cartItems.map((item, index) => (
                    <div key={`${item.id}-${index}`} className="my-3">
                      <CartAddToCart item={item} />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer with Total and Checkout */}
            {cartItems.length > 0 && (
              <div className="border-t p-6 bg-gray-50">
                <div className="space-y-4">
                  {/* Summary */}
                  <div className="space-y-2">
                    <div className="border-t pt-2 flex justify-between text-2xl text-black"></div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3 flex items-center justify-center">
                    <Link
                      to={"/checkout"}
                      className=" h-16 bg-green-500 w-full text-white addtocart-pulse rounded-2xl font-black text-[15px] sm:text-lg flex items-center justify-center gap-3 hover:bg-green-400 transition-all shadow-2xl active:scale-[0.98]"
                    >
                      Checkout
                    </Link>
                  </div>
                  <DrawerClose asChild>
                    <Button className="w-full py-3">Continue Shopping</Button>
                  </DrawerClose>
                </div>
              </div>
            )}
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default CartDrawer;
