import React from 'react'
import { ShoppingCart, Star } from 'lucide-react'
import { useNavigate } from 'react-router'
const ProductBottom = ({ show }) => {
    let navigator = useNavigate()

    return (
        <div className="flex justify-center items-center w-full">
            <div className="flex flex-wrap gap-4 w-full justify-center items-center">

                {show.map((product) => {
                    let isFilled = Math.floor(product?.rating)
                    return <div onClick={()=>{navigator(`/product/${product.id}`)}} className="bg-[#121212] border border-white/5 rounded-2xl overflow-hidden flex flex-col justify-between w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1rem)] lg:w-[calc(20%-1rem)] max-w-[230px]">
                        <div className="bg-white p-4 relative aspect-[4/3] flex items-center justify-center">
                            <span className="absolute top-3 left-3 bg-zinc-800/80 text-white text-[10px] px-2 py-0.5 rounded-md font-medium">
                                {product?.category}
                            </span>
                            <img src={product?.images[0]} alt="Smart Watch" className="max-h-full object-contain" />
                        </div>
                        <div className="p-4 flex flex-col gap-2.5">
                            <div className="flex flex-col gap-1">
                                <span className="text-zinc-600 text-[10px] uppercase font-semibold tracking-wider">{product?.category}</span>
                                <h4 className="text-white text-sm font-bold truncate custom-wide-font">{product?.title}</h4>
                            </div>
                            <div className="flex items-center gap-1.5 text-xs">
                                <span className="text-amber-400 flex gap-1">
                                    <Star className={`w-3 h-3 ${isFilled >= 1 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 fill-none'}`} />

                                    <Star className={`w-3 h-3 ${isFilled >= 2 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 fill-none'}`} />

                                    <Star className={`w-3 h-3 ${isFilled >= 3 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 fill-none'}`} />

                                    <Star className={`w-3 h-3 ${isFilled >= 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 fill-none'}`} />

                                    <Star className={`w-3 h-3 ${isFilled >= 5 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 fill-none'}`} />
                                </span>
                                <span className="text-zinc-500">({product?.reviews?.length})</span>
                            </div>
                            <hr className="border-zinc-800" />
                            <div className="flex items-center justify-between mt-1">
                                <span className="text-[#d1f73d] font-bold custom-wide-font text-base">${product?.price}</span>
                                <button className="bg-[#d1f73d] text-black text-xs font-bold px-3 py-2 rounded-lg flex items-center gap-1 hover:bg-[#b9e02a] transition-colors custom-wide-font">
                                    <ShoppingCart className="w-3.5 h-3.5" strokeWidth={2.5} /> Add
                                </button>
                            </div>
                        </div>
                    </div>
                })}

            </div>
        </div>
    )
}

export default ProductBottom