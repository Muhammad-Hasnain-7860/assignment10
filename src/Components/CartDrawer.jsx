import React, { useContext } from 'react'
import { ShoppingBag, X, Minus, Plus, Trash2, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router';
import { MyStore } from '../context/MyWebsite';

const CartDrawer = () => {
    let { currentUser, setCurrentUser ,showCart , setShowCart , updateProduct , decrementProducts} = useContext(MyStore)
    let navigate = useNavigate()

    return (
        <div className="w-[400px] fixed z-1000 right-0 top-0 h-screen bg-[#0d0d0d] text-white flex flex-col border-l border-zinc-800">

            <div className="p-6 flex items-center justify-between border-b border-zinc-800">
                <div className="flex items-center gap-3">
                    <ShoppingBag className="text-[#d1f73d] w-6 h-6" strokeWidth={2} />
                    <h2 className="text-xl font-bold custom-wide-font">Cart</h2>
                    <span className="bg-[#1a1c11] text-[#d1f73d] text-xs font-medium px-2.5 py-1 rounded-full border border-[#d1f73d]/20">
                        {currentUser.shopping.length}
                    </span>
                </div>
                <button onClick={() => {
                    setShowCart(false)
                }} className="text-zinc-500 hover:text-white transition-colors">
                    <X className="w-5 h-5" strokeWidth={2} />
                </button>
            </div>

            <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4">

                {currentUser.shopping.length > 0 && currentUser.shopping.map((cart) => {
                    
                    return <div className="bg-[#121212] border border-white/10 rounded-2xl p-4 flex gap-4 relative">

                        <div className="w-20 h-20 bg-zinc-800 rounded-xl flex items-center justify-center overflow-hidden border border-zinc-700 flex-shrink-0">
                            <img src={cart?.images[0]} alt="Product" className="w-full h-full object-cover" />
                        </div>

                        <div className="flex flex-col flex-1 justify-between">
                            <div className="flex flex-col">
                                <h4 className="text-zinc-300 font-medium text-sm">
                                    {cart.title}
                                </h4>
                                <div className="flex items-baseline gap-2 mt-1">
                                    <span className="text-[#d1f73d] text-base font-bold custom-wide-font">
                                        ${cart.price}
                                    </span>
                                    <span className="text-zinc-600 text-xs">
                                        ${cart.price} each
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between mt-3">
                                <div className="flex items-center gap-3 bg-[#0d0d0d] border border-white/10 rounded-lg p-1">
                                    <button onClick={()=>{decrementProducts(cart.id)}} className="p-1 text-zinc-500 hover:text-white transition-colors">
                                        <Minus className="w-3.5 h-3.5" strokeWidth={2.5} />
                                    </button>
                                    <span className="text-sm font-semibold w-4 text-center">
                                        {cart.qty}
                                    </span>
                                    <button onClick={()=>{updateProduct(cart.id)}} className="p-1 text-zinc-500 hover:text-white transition-colors">
                                        <Plus className="w-3.5 h-3.5" strokeWidth={2.5} />
                                    </button>
                                </div>

                                <button className="text-zinc-600 hover:text-red-500 transition-colors">
                                    <Trash2 className="w-4 h-4" strokeWidth={2} />
                                </button>
                            </div>
                        </div>

                    </div>
                })}

            </div>

            <div className="p-6 border-t border-zinc-800 flex flex-col gap-4 bg-[#0d0d0d]">
                <div className="flex items-center justify-between">
                    <span className="text-zinc-500 text-sm">Total</span>
                    <span className="text-white text-2xl font-black tracking-tight custom-wide-font">
                        ${currentUser.shopping.reduce((acc,val)=>{
                            return acc + val.price * val.qty
                        },0)}
                    </span>
                </div>

                <button className="w-full bg-[#d1f73d] text-black font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-[#b9e02a] transition-colors duration-300 custom-wide-font text-sm">
                    Checkout
                    <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
                </button>

                <button onClick={() => {
                    let obj = { ...currentUser, shopping : []}
                    setCurrentUser(obj)
                    localStorage.setItem('current', JSON.stringify(obj))
                }} className="text-zinc-600 hover:text-zinc-400 text-xs font-medium transition-colors text-center mt-1">
                    Clear cart
                </button>
            </div>

        </div>
    )
}

export default CartDrawer