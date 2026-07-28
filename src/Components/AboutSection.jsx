import React from "react";
import { Zap, Box, Users, Star, Truck } from "lucide-react";

const AboutSection = () => {
  return (
    <div className="w-full bg-[#0a0a0a]  p-4 flex justify-center items-center">
      <div className="max-w-[1200px] w-full flex flex-col items-center text-center">
        <div className="flex flex-col items-center max-w-2xl gap-4">
          <div className="w-16 h-16 bg-[#d1f73d] rounded-2xl flex items-center justify-center text-black">
            <Zap className="w-8 h-8 fill-black" strokeWidth={2} />
          </div>

          <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight mt-2 custom-wide-font">
            About <span className="text-[#d1f73d]">SkyMart</span>
          </h2>

          <p className="text-zinc-400 text-sm md:text-base leading-relaxed opacity-80 px-4">
            SkyMart is a next-generation e-commerce platform built to make
            online shopping fast, fair, and enjoyable — for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-4">
          <div className="bg-[#121212] border border-white/20 rounded-2xl p-6 flex flex-col items-center justify-center gap-2">
            <Box className="text-[#d1f73d] w-6 h-6" strokeWidth={2} />
            <span className="text-white text-3xl font-extrabold tracking-tight custom-wide-font mt-1">
              20K+
            </span>
            <span className="text-zinc-500 text-xs tracking-wide uppercase font-medium">
              Products
            </span>
          </div>

          <div className="bg-[#121212] border border-white/20 rounded-2xl p-6 flex flex-col items-center justify-center gap-2">
            <Users className="text-[#d1f73d] w-6 h-6" strokeWidth={2} />
            <span className="text-white text-3xl font-extrabold tracking-tight custom-wide-font mt-1">
              50K+
            </span>
            <span className="text-zinc-500 text-xs tracking-wide uppercase font-medium">
              Happy Customers
            </span>
          </div>

          <div className="bg-[#121212] border border-white/20 rounded-2xl p-6 flex flex-col items-center justify-center gap-2">
            <Star className="text-[#d1f73d] w-6 h-6" strokeWidth={2} />
            <span className="text-white text-3xl font-extrabold tracking-tight custom-wide-font mt-1">
              4.9
            </span>
            <span className="text-zinc-500 text-xs tracking-wide uppercase font-medium">
              Avg. Rating
            </span>
          </div>

          <div className="bg-[#121212] border border-white/20 rounded-2xl p-6 flex flex-col items-center justify-center gap-2">
            <Truck className="text-[#d1f73d] w-6 h-6" strokeWidth={2} />
            <span className="text-white text-3xl font-extrabold tracking-tight custom-wide-font mt-1">
              99%
            </span>
            <span className="text-zinc-500 text-xs tracking-wide uppercase font-medium">
              On-time Delivery
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
