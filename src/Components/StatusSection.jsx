import React, { useContext } from 'react';
import { Package, TrendingUp, Star, Tag } from 'lucide-react';
import { MyStore } from '../context/MyWebsite';

const StatsSection = () => {
  let { Products} = useContext(MyStore)
  return (
    <div className="w-full bg-[#0a0a0a] p-6 flex justify-center items-center">
      <div className="max-w-[1200px] w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="bg-[#121212] border border-white rounded-2xl p-5 flex items-center gap-4">
          <div className="bg-[#1a1c13] p-3 rounded-xl flex items-center justify-center text-[#d1f73d]">
            <Package className="w-6 h-6" strokeWidth={2} />
          </div>
          <div className="flex flex-col">
            <span className="text-white text-2xl font-bold tracking-tight custom-wide-font">
              0
            </span>
            <span className="text-zinc-400 text-sm mt-0.5">
              Cart Items
            </span>
            <span className="text-zinc-600 text-xs mt-0.5">
              In your bag
            </span>
          </div>
        </div>

        <div className="bg-[#121212] border border-white rounded-2xl p-5 flex items-center gap-4">
          <div className="bg-[#131620] p-3 rounded-xl flex items-center justify-center text-[#3b82f6]">
            <TrendingUp className="w-6 h-6" strokeWidth={2} />
          </div>
          <div className="flex flex-col">
            <span className="text-white text-2xl font-bold tracking-tight custom-wide-font">
              $0.00
            </span>
            <span className="text-zinc-400 text-sm mt-0.5">
              Cart Value
            </span>
            <span className="text-zinc-600 text-xs mt-0.5">
              Ready to checkout
            </span>
          </div>
        </div>

        <div className="bg-[#121212] border border-white rounded-2xl p-5 flex items-center gap-4">
          <div className="bg-[#1c1811] p-3 rounded-xl flex items-center justify-center text-[#f59e0b]">
            <Star className="w-6 h-6" strokeWidth={2} />
          </div>
          <div className="flex flex-col">
            <span className="text-white text-2xl font-bold tracking-tight custom-wide-font">
              {Products.filter((pro)=> pro.rating >= 4.8).length}
            </span>
            <span className="text-zinc-400 text-sm mt-0.5">
              Top Products
            </span>
            <span className="text-zinc-600 text-xs mt-0.5">
              Highly rated
            </span>
          </div>
        </div>

        <div className="bg-[#121212] border border-white rounded-2xl p-5 flex items-center gap-4">
          <div className="bg-[#181320] p-3 rounded-xl flex items-center justify-center text-[#a855f7]">
            <Tag className="w-6 h-6" strokeWidth={2} />
          </div>
          <div className="flex flex-col">
            <span className="text-white text-2xl font-bold tracking-tight custom-wide-font">
              6
            </span>
            <span className="text-zinc-400 text-sm mt-0.5">
              Categories
            </span>
            <span className="text-zinc-600 text-xs mt-0.5">
              To explore
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default StatsSection;