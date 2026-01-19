import { createContext, useContext, useEffect, useState } from "react";
// eslint-disable-next-line react-refresh/only-export-components
const ShoppingCartContext = createContext({});

const ShoppingCartContextProvider = ({ children }) => {
  // Fixed: Added check for both null and "undefined" string
  const initialCartItems = (() => {
    try {
      const item = localStorage.getItem("cartItems");
      if (!item || item === "undefined") {
        return [];
      }
      return JSON.parse(item);
    } catch (error) {
      console.error("Error parsing cart items from localStorage:", error);
      return [];
    }
  })();

  const [cartItems, setCartItems] = useState(initialCartItems);
  const [productSelection, setProductSelection] = useState({
    selectedImage: 0,
    selectedSize: "",
    selectedColor: "",
    quantity: 1,
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  const resetSelection = () => {
    setProductSelection({
      selectedImage: 0,
      selectedSize: "",
      selectedColor: "",
      quantity: 1,
    });
  };
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existingItem = prev.find(
        (item) =>
          item.id === product.id &&
          item.selectedSize === product.selectedSize &&
          item.selectedColor === product.selectedColor
      );

      if (existingItem) {
        return prev.map((item) =>
          item === existingItem
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      }
      return [...prev, product];
    });
    resetSelection(); // Reset after adding
  };
  const removeItemFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      // We use parseFloat to ensure it's a number, even if stored as a string
      const price = parseFloat(item.price) || 0;
      return total + price * item.quantity;
    }, 0);
  };

  // Also, let's add clearCart to use after a successful checkout
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeItemFromCart,
        productSelection, // The state
        setProductSelection, // The updater
        resetSelection, // Helper
        getTotalPrice, // Export this
        clearCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartContextProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};
