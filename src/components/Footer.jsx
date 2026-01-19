import { Target } from "lucide-react";
import React from "react";
import { FaInstagram, FaFacebook, FaTiktok, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const socials = [
    {
      icon: <FaInstagram size={22} />,
      link: "https://www.instagram.com/elchapo44_clothes/",
    },
    {
      icon: <FaTiktok size={21} />,
      link: "https://www.tiktok.com/@elchapo44_clothes",
    },
    {
      icon: <FaWhatsapp size={22} />,
      link: "https://wa.me/your_number",
    },
  ];
  return (
    <footer className="bg-[#0a0a0a] text-white pt-10 pb-10 px-6">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center">
        {/* 1. Large Brand Identity */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-[0.15em] mb-4">
            ELCHAPO44<span className="text-zinc-600">.</span>
          </h2>
          <p className="text-zinc-500 text-[10px] uppercase tracking-[0.4em]">
            Premium Streetwear — Designed in Morocco
          </p>
        </div>

        {/* 2. Social Media Grid */}
        <div className="flex gap-8 mb-10">
          {socials.map((social, i) => (
            <a
              key={i}
              href={social.link}
              target="_blank" // <--- Opens in new tab
              rel="noopener noreferrer" // <--- Security best practice
              className="text-zinc-500 hover:text-white transition-all duration-500 hover:-translate-y-1"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* 3. Bottom Bar (Legal & Payments) */}
        <div className="w-full pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[9px] text-zinc-600 uppercase tracking-[0.3em]">
            © 2026 ELCHAPO44. ESTABLISHED IN MOROCCO.
          </p>

          {/* Payment Methods (Subtle) */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
