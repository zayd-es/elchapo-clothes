"use client";

import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/elchapo-Logo.jpg";
import CartDrawer from "./CartDrawer";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { ChevronDown } from "lucide-react";
import { getCategories } from "@/getData/Product";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      // If we scroll more than 40px, we trigger the 'scrolled' state
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleGetCategories = async () => {
      const { success } = await getCategories();
      if (success) setCategoryList(success);
    };
    handleGetCategories();
  }, []);

  return (
    <>
      {/* CRITICAL FIX: This spacer ensures your page content 
        doesn't start underneath the fixed header. 
      */}
      <div className="h-[100px] md:h-[120px] w-full" />

      <header className="fixed top-0 left-0 w-full z-50 shadow-sm">
        {/* Top Banner - Hides on scroll to prevent "cutting off" the view */}
        <div
          className={`bg-black text-white text-[10px] font-black uppercase tracking-[0.2em] text-center transition-all duration-500 ease-in-out overflow-hidden ${
            isScrolled ? "h-0 opacity-0" : "h-8 py-2 opacity-100"
          }`}
        >
          free shipping on orders over 700 DH
        </div>

        {/* Main Nav Container */}
        <nav
          className={`w-full px-6 md:px-12 flex justify-between items-center transition-all duration-500 ${
            isScrolled
              ? "bg-white/90 backdrop-blur-xl py-3 border-b border-zinc-200"
              : "bg-white py-5 border-b border-transparent"
          }`}
        >
          {/* Left: Mobile Toggle */}
          <button
            className="md:hidden p-2 -ml-2 text-black"
            onClick={() => setIsMenuOpen(true)}
          >
            <AiOutlineMenu size={24} />
          </button>

          {/* Center: Logo */}
          <div className="md:flex-shrink-0 absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
            <Link to="/" className="block group">
              <div
                className={`rounded-2xl overflow-hidden border border-zinc-100 transition-all duration-500 ${
                  isScrolled
                    ? "w-10 h-10 md:w-12 md:h-12"
                    : "w-14 h-14 md:w-16 md:h-16"
                }`}
              >
                <img
                  src={logo}
                  alt="Logo"
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex flex-1 justify-center px-10">
            <ul className="flex items-center gap-7">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `text-xs font-black uppercase tracking-widest transition-all hover:text-black ${
                      isActive
                        ? "text-black border-b-2 border-black pb-1"
                        : "text-zinc-400"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>

              {categoryList.map((category) => (
                <li key={category.id}>
                  <NavLink
                    to={`/category/${category.documentId}`}
                    className={({ isActive }) =>
                      `text-xs font-black uppercase  tracking-widest transition-all hover:text-black ${
                        isActive
                          ? "text-black border-b-2 border-black pb-1"
                          : "text-zinc-400"
                      }`
                    }
                  >
                    {category.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2">
            <CartDrawer />
          </div>
        </nav>

        {/* Mobile Sidebar (Kept your logic, fixed the Close button positioning) */}
        <div
          className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 z-[60] md:hidden ${
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className={`absolute left-0 top-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-out p-8 flex flex-col ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-12">
              <span className="font-black text-xl tracking-tighter uppercase">
                Menu
              </span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 bg-zinc-100 rounded-full"
              >
                <AiOutlineClose size={20} />
              </button>
            </div>

            <ul className="flex flex-col gap-6">
              <li>
                <Link
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-3xl font-black uppercase tracking-tighter"
                >
                  Home
                </Link>
              </li>
              <hr className="border-zinc-100" />
              <li className="space-y-6">
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em]">
                  Collections
                </span>
                <div className="flex flex-col gap-4">
                  {categoryList.map((cat) => (
                    <Link
                      key={cat.id}
                      to={`/category/${cat.documentId}`}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-xl font-bold text-zinc-800 hover:translate-x-2 transition-transform"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </li>
            </ul>

            <div className="mt-auto pt-10 border-t border-zinc-100 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
              EL CHAPOCLOTHES — {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
