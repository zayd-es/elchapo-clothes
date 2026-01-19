import React from "react";

const About = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div
          className="space-y-8"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div>
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.5em]">
              The Philosophy
            </span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-black">
              Crafted for the <br /> Modern Nomad.
            </h2>
          </div>
          <div data-aos="fade-right" data-aos-duration="2000">
            <p className="text-zinc-500 text-sm leading-relaxed max-w-md uppercase tracking-widest">
              ELCHAPO44 merges industrial streetwear with local Moroccan soul.
              Every piece is cut for a silhouette that speaks of confidence and
              architectural minimalism.
            </p>
            <button className="border-b-2 border-black pb-1 text-[10px] font-black uppercase tracking-widest hover:text-zinc-400 hover:border-zinc-400 transition-all">
              Learn Our Story
            </button>
          </div>
        </div>
        <div
          className="relative aspect-[4/5] overflow-hidden bg-zinc-100"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <img
            src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=1000"
            alt="Streetwear Culture"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
