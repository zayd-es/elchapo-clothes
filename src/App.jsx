import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import ShoppingCartContextProvider from "./components/context/CartContext";
import { Toaster } from "@/components/ui/sonner";
import ProductDetails from "./components/ProductDetails";
import CategoryDetails from "./components/CategoryDetails";

import "aos/dist/aos.css";
import NotFoundPage from "./components/NotFoundPage";
import Checkout from "./components/Checkout";

function App() {
  const Routing = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,

      children: [
        { index: true, element: <Home /> },
        { path: "/product/:documentId", element: <ProductDetails /> },
        { path: "/category/:documentId", element: <CategoryDetails /> },
        { path: "/checkout", element: <Checkout /> },
        { path: "*", element: <NotFoundPage /> },
      ],
    },
  ]);

  return (
    <div>
      <ShoppingCartContextProvider>
        <RouterProvider router={Routing} />
      </ShoppingCartContextProvider>
      <Toaster />
    </div>
  );
}

export default App;
