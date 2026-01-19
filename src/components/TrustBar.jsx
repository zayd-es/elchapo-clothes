import React from "react";
import { Truck, Zap, ShieldCheck, Banknote } from "lucide-react";

const TrustBar = () => {
  const items = [
    {
      label: "Free Shipping",
      sub: "Orders over 700 DH",
      icon: <Truck size={30} strokeWidth={1.2} />,
    },
    {
      label: "Express Delivery",
      sub: "24-48h Morocco",
      icon: <Zap size={30} strokeWidth={1.2} />,
    },
    {
      label: "Premium Quality",
      sub: "100% Heavy Cotton",
      icon: <ShieldCheck size={30} strokeWidth={1.2} />,
    },
    {
      label: "Secure Payment",
      sub: "Cash on delivery",
      icon: <Banknote size={30} strokeWidth={1.2} />,
    },
  ];

  return (
    /* bg-[#F5F5F3] is a "Bone" white color that contrasts beautifully with pure white */
    <section className="w-full bg-[#F5F5F3] py-16">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center space-y-4 group"
            >
              {/* Icon in a circular "badge" to make it pop against the new bg */}
              <div className="w-12 h-12 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 group-hover:bg-black group-hover:text-white group-hover:border-black transition-all duration-500">
                {item.icon}
              </div>

              <div className="space-y-1">
                <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-black">
                  {item.label}
                </h4>
                <p className="text-[10px] text-zinc-500 uppercase tracking-widest leading-relaxed">
                  {item.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
