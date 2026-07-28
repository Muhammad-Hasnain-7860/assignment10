import { ArrowRight, Laptop, Shirt, Sofa, Home, Bike, Layers } from 'lucide-react';
import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { MyStore } from '../context/MyWebsite';

const CategoriesSection = () => {
  let navigator = useNavigate()
  let { Products, currentCat, setCurrentCat } = useContext(MyStore)
  return (
    <div className="w-full bg-[#0a0a0a] p-6 flex justify-center items-center">
      <div className="max-w-[1200px] w-full flex flex-col gap-6">

        <div className="flex justify-between items-center w-full">
          <h2 className="text-white text-2xl font-bold tracking-tight custom-wide-font">
            Shop by Category
          </h2>
          <p className="text-[#d1f73d] text-sm font-semibold flex items-center gap-1 hover:text-[#b9e02a] transition-colors duration-300 cursor-pointer custom-wide-font">
            View All
            <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">

          <div onClick={() => {
            navigator('/products/beauty')
            setCurrentCat('beauty')
          }} className="bg-[#161616] border border-white/20 rounded-2xl p-6 flex flex-col items-center justify-center text-center group cursor-pointer hover:border-[#d1f73d]/40 transition-all duration-300">
            <div className="text-[#d1f73d] bg-[#1a1c13] p-4 rounded-xl mb-4 group-hover:scale-105 transition-transform duration-300">
              <Laptop className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <span className="text-white text-lg font-bold custom-wide-font">
              Beauty
            </span>
            <span className="text-zinc-400 text-sm mt-1">
              {Products.filter((pro) => pro.category === 'beauty').length} items
            </span>
          </div>

          <div onClick={() => {
            navigator('/products/fragrances')
            setCurrentCat('fragrances')

          }} className="bg-[#161616] border border-white/20 rounded-2xl p-6 flex flex-col items-center justify-center text-center group cursor-pointer hover:border-[#d1f73d]/40 transition-all duration-300">
            <div className="text-[#d1f73d] bg-[#1a1c13] p-4 rounded-xl mb-4 group-hover:scale-105 transition-transform duration-300">
              <Shirt className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <span className="text-white text-lg font-bold custom-wide-font">
              Fragrances
            </span>
            <span className="text-zinc-400 text-sm mt-1">
              {Products.filter((pro) => pro.category === 'fragrances').length} items
            </span>
          </div>

          <div onClick={() => {
            navigator('/products/furniture')
            setCurrentCat('furniture')
          }} className="bg-[#161616] border border-white/20 rounded-2xl p-6 flex flex-col items-center justify-center text-center group cursor-pointer hover:border-[#d1f73d]/40 transition-all duration-300">
            <div className="text-[#d1f73d] bg-[#1a1c13] p-4 rounded-xl mb-4 group-hover:scale-105 transition-transform duration-300">
              <Sofa className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <span className="text-white text-lg font-bold custom-wide-font">
              Furniture
            </span>
            <span className="text-zinc-400 text-sm mt-1">
              {Products.filter((pro) => pro.category === 'furniture').length} items
            </span>
          </div>

          <div onClick={() => {
            navigator('/products/groceries')
            setCurrentCat('groceries')
          }} className="bg-[#161616] border border-white/20 rounded-2xl p-6 flex flex-col items-center justify-center text-center group cursor-pointer hover:border-[#d1f73d]/40 transition-all duration-300">
            <div className="text-[#d1f73d] bg-[#1a1c13] p-4 rounded-xl mb-4 group-hover:scale-105 transition-transform duration-300">
              <Home className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <span className="text-white text-lg font-bold custom-wide-font">
              Groceries
            </span>
            <span className="text-zinc-400 text-sm mt-1">
              {Products.filter((pro) => pro.category === 'groceries').length} items
            </span>
          </div>


        </div>
      </div>
    </div>
  );
};

export default CategoriesSection;