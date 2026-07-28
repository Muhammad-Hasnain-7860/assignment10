import React from 'react';
import { ShieldCheck, Zap, Heart, Star } from 'lucide-react';

const OurStorySection = () => {
  return (
    <div className="w-full bg-[#0a0a0a] p-6 md:p-12 flex justify-center items-center">
      <div className="max-w-[1200px] w-full flex flex-col gap-12">
        
        <div className="bg-[#121212] border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col gap-6">
          <h2 className="text-white text-3xl font-bold tracking-tight custom-wide-font">
            Our Story
          </h2>
          <div className="flex flex-col gap-4 text-zinc-400 text-sm md:text-base leading-relaxed max-w-5xl">
            <p>
              SkyMart started in 2022 as a small side project — two engineers tired of bloated, slow e-commerce experiences. We asked ourselves: what if shopping online was actually <span className="italic text-white">enjoyable</span>?
            </p>
            <p>
              Three years later, SkyMart serves over 50,000 customers across the country. We stock electronics, fashion, jewelry, and everyday essentials — all at prices that don't require a second mortgage.
            </p>
            <p>
              We're still the same team at heart: obsessed with speed, transparency, and making you feel good about every purchase you make here.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-8 items-center mt-4">
          <h2 className="text-white text-3xl font-bold tracking-tight text-center custom-wide-font">
            What We Stand For
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            
            <div className="bg-[#121212] border border-white/10 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 bg-[#1a1c11] border border-[#d1f73d]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="text-[#d1f73d] w-5 h-5" strokeWidth={2} />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-white text-lg font-bold custom-wide-font">
                  Trust
                </h4>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Every product is verified for quality and authenticity before listing.
                </p>
              </div>
            </div>

            <div className="bg-[#121212] border border-white/10 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 bg-[#1a1c11] border border-[#d1f73d]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Zap className="text-[#d1f73d] w-5 h-5" strokeWidth={2} />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-white text-lg font-bold custom-wide-font">
                  Speed
                </h4>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  We obsess over delivery times so your orders arrive when promised.
                </p>
              </div>
            </div>

            <div className="bg-[#121212] border border-white/10 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 bg-[#1a1c11] border border-[#d1f73d]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Heart className="text-[#d1f73d] w-5 h-5" strokeWidth={2} />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-white text-lg font-bold custom-wide-font">
                  Community
                </h4>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Built around real customer feedback, not just business metrics.
                </p>
              </div>
            </div>

            <div className="bg-[#121212] border border-white/10 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 bg-[#1a1c11] border border-[#d1f73d]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Star className="text-[#d1f73d] w-5 h-5" strokeWidth={2} />
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-white text-lg font-bold custom-wide-font">
                  Quality
                </h4>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  We curate the best — no filler, no junk, just great products.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default OurStorySection;