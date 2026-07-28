import React, { useContext } from 'react';
import { ShoppingCart, LogOut } from 'lucide-react';
import { MyStore } from '../context/MyWebsite';
import { useNavigate } from 'react-router';
import { toast } from 'react-hot-toast'
import CartDrawer from '../Components/CartDrawer'

const Navbar = () => {
    let { currentUser, setCurrentUser, showCart, setShowCart } = useContext(MyStore)
    let navigate = useNavigate()

    console.log(currentUser);
    

    return (
        <header className="w-[95vw] mx-auto  h-[70px] px-10 flex items-center justify-between">
            <div className="flex items-center cursor-pointer">
                <div className="bg-[#d1f73d] text-black text-xl font-bold w-8 h-8 rounded-[5px] flex items-center justify-center mr-3">
                    S
                </div>
                <span className="text-[#d1f73d] text-2xl font-bold tracking-tighter">
                    SkyMart
                </span>
            </div>

            <ul className="flex gap-6 list-none">
                <li>
                    <span onClick={() => { navigate('/dashboard') }} className="text-[#d1f73d] text-base font-bold">
                        Home
                    </span>
                </li>
                <li>
                    <span onClick={() => { navigate('/products') }} className="text-[#e0e0e0] text-base hover:text-white transition-colors duration-300">
                        Shop
                    </span>
                </li>
                <li>
                    <span onClick={() => { navigate('/about') }} className="text-[#e0e0e0] text-base hover:text-white transition-colors duration-300">
                        About
                    </span>
                </li>
            </ul>

            <div className="flex items-center gap-5">
                <span className="flex items-center text-[#e0e0e0] bg-[#2a2a2a] py-2 px-4 rounded-xl text-base hover:text-white transition-colors duration-300">
                    <span className="bg-[#d1f73d] text-black font-bold w-7 h-7 rounded-[5px] flex items-center justify-center mr-2.5 text-lg">
                        {currentUser?.username?.slice(0, 1)}
                    </span>
                    {currentUser?.username}
                </span>

                <span onClick={() => {
                    setShowCart(prev => !prev)
                }} className="text-xl text-[#e0e0e0] hover:text-white transition-colors duration-300">
                    <ShoppingCart className="w-6 h-6" strokeWidth={2} />
                </span>

                <span onClick={() => {
                    setCurrentUser(null)
                    localStorage.removeItem('current')
                    toast.success('Logout see you Soon', {
                        style: {
                            color: 'black',
                        }
                    })
                }} className="cursor-pointer p-1 text-xl text-[#e0e0e0] hover:text-white transition-colors duration-300">
                    <LogOut className="w-6 h-6" strokeWidth={2} />
                </span>
            </div>

            {showCart && <CartDrawer />}
        </header>
    );
};

export default Navbar;