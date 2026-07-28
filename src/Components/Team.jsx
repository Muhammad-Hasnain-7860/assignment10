import React from 'react';
import { ArrowRight } from 'lucide-react';

const TeamAndCTASection = () => {
  return (
    <div className="w-full bg-[#0a0a0a] p-6 md:p-12 flex flex-col items-center justify-center gap-12">
      
      <div className="max-w-[1200px] w-full flex flex-col gap-8 items-center">
        <h2 className="text-white text-3xl font-bold tracking-tight text-center custom-wide-font">
          Meet the Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          
          <div className="bg-[#121212] border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center justify-center gap-4">
            <div className="w-14 h-14 bg-[#d1f73d] rounded-2xl flex items-center justify-center text-black text-xl font-bold custom-wide-font">
              A
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-white text-base font-bold custom-wide-font">
                Aryan Shah
              </h4>
              <p className="text-zinc-500 text-xs">
                Founder & CEO
              </p>
            </div>
          </div>

          <div className="bg-[#121212] border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center justify-center gap-4">
            <div className="w-14 h-14 bg-[#3b82f6] rounded-2xl flex items-center justify-center text-white text-xl font-bold custom-wide-font">
              P
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-white text-base font-bold custom-wide-font">
                Priya Mehta
              </h4>
              <p className="text-zinc-500 text-xs">
                Head of Product
              </p>
            </div>
          </div>

          <div className="bg-[#121212] border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center justify-center gap-4">
            <div className="w-14 h-14 bg-[#a855f7] rounded-2xl flex items-center justify-center text-white text-xl font-bold custom-wide-font">
              R
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-white text-base font-bold custom-wide-font">
                Rohan Verma
              </h4>
              <p className="text-zinc-500 text-xs">
                Lead Engineer
              </p>
            </div>
          </div>

          <div className="bg-[#121212] border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center justify-center gap-4">
            <div className="w-14 h-14 bg-[#f43f5e] rounded-2xl flex items-center justify-center text-white text-xl font-bold custom-wide-font">
              S
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-white text-base font-bold custom-wide-font">
                Sneha Kapoor
              </h4>
              <p className="text-zinc-500 text-xs">
                Design Director
              </p>
            </div>
          </div>

        </div>
      </div>

      <div className="max-w-[1200px] w-full bg-[#121212] border border-[#d1f73d]/10 rounded-3xl p-8 md:p-12 flex flex-col items-center text-center gap-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-white text-3xl md:text-4xl font-bold tracking-tight custom-wide-font">
            Ready to shop?
          </h2>
          <p className="text-zinc-500 text-sm md:text-base">
            Explore thousands of products at unbeatable prices.
          </p>
        </div>
        
        <button className="bg-[#d1f73d] text-black font-bold px-6 py-3.5 rounded-xl text-sm flex items-center gap-2 hover:bg-[#b9e02a] transition-colors duration-300 custom-wide-font">
          Browse Products
          <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
        </button>
      </div>

    </div>
  );
};

export default TeamAndCTASection;