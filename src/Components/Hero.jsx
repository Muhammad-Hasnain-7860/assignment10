import React, { useContext } from 'react';
import { ArrowRight } from 'lucide-react';
import { MyStore } from '../context/MyWebsite';
import { useNavigate } from 'react-router';
const HeroSection = () => {
  let navigator = useNavigate(MyStore)
  let { currentUser} = useContext(MyStore)

  console.log(currentUser);
  

  return (
    <div className="w-full bg-[#0a0a0a] p-6 flex justify-center items-center">
      <div className="max-w-[1200px] w-full bg-[#121212] rounded-3xl border border-white p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative overflow-hidden">
        
        <div className="flex flex-col max-w-2xl z-10">
          <span className="text-[#d1f73d] text-xs md:text-sm tracking-widest uppercase mb-4 flex items-center custom-wide-font">
            Good Afternoon 👋
          </span>
          
          <h1 className="text-white text-4xl md:text-6xl font-bold tracking-tight leading-none mb-4 custom-wide-font">
            Welcome back, <br />
            <span className="text-[#d1f73d]">{currentUser.username}</span>
          </h1>
          
          <p className="text-zinc-4xl text-sm md:text-base text-[#e0e0e0] opacity-70 mb-8 max-w-md">
            Discover today's picks — hand-curated products across electronics, fashion, and more.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <p onClick={()=>{navigator('/products')}} className="bg-[#d1f73d] text-black font-bold px-6 py-3 rounded-xl flex items-center gap-2 text-sm md:text-base hover:bg-[#b9e02a] transition-colors duration-300 custom-wide-font cursor-pointer">
              Shop Now
              <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
            </p>
            
            <p onClick={()=>{navigator('/products')}} className="border border-zinc-700 text-white font-medium px-6 py-3 rounded-xl text-sm md:text-base hover:bg-zinc-800 transition-colors duration-300 custom-wide-font cursor-pointer">
              View All Products
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full md:w-auto z-10 min-w-[220px]">
          <div className="bg-[#1a1c13] border border-[#d1f73d]/20 p-6 rounded-2xl flex flex-col items-center justify-center text-center">
            <span className="text-[#d1f73d] text-3xl font-extrabold tracking-tight custom-wide-font">
              20+
            </span>
            <span className="text-zinc-4xl text-xs mt-1 text-[#e0e0e0] opacity-60">
              Products Available
            </span>
          </div>

          <div className="bg-[#161616] border border-zinc-800 p-6 rounded-2xl flex flex-col items-center justify-center text-center">
            <span className="text-white text-3xl font-extrabold tracking-tight custom-wide-font">
              Free
            </span>
            <span className="text-zinc-4xl text-xs mt-1 text-[#e0e0e0] opacity-60">
              Delivery on ₹999+
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;