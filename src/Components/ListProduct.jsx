import { useContext } from "react"
import { MyStore } from "../context/MyWebsite"
import { useNavigate } from "react-router"

const ListProduct = () => {
    let { Products, setCurrentCat, users, currentUser, setCurrentUser, showCart, setShowCart, shopping, setShopping } = useContext(MyStore)

    let topRated = Products.filter((pro) => {
        return pro.rating >= 4.8
    })

    let navigator = useNavigate()

    let newReveal = Products.slice(0, 7)

    return (
        <div className="w-full bg-[#0a0a0a] p-6 flex justify-center items-center">
            <div className="max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="bg-[#121212] border border-zinc-800 rounded-3xl p-6 flex flex-col gap-5">
                    <div className="flex justify-between items-center">
                        <h3 className="text-white text-xl font-bold flex items-center gap-2 custom-wide-font">
                            <span className="text-amber-400">★</span>
                            Top Rated
                        </h3>
                        <p onClick={() => {
                            Products.sort((a, b) => {
                                return b.rating - a.rating
                            })

                            setCurrentCat('top-rated')
                            navigator('/products')

                        }} className="text-[#d1f73d] text-sm font-semibold flex items-center gap-1 hover:text-[#b9e02a] transition-colors duration-300 cursor-pointer custom-wide-font">
                            See all →
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">
                        {topRated.map((elem) => {
                            return <div className="bg-[#161616] border border-zinc-800 rounded-2xl p-4 flex items-center justify-between hover:border-white/10 transition-colors duration-300">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-zinc-800 overflow-hidden flex-shrink-0">
                                        <img src={elem.images[0]} alt="Product" className="w-full h-full object-cover opacity-80" />
                                    </div>
                                    <span className="text-[#d1f73d] text-lg font-bold custom-wide-font">${elem.price}</span>
                                </div>
                                <p onClick={() => {
                                    let arr = [...shopping, {...elem , qty : 1}]
                                    setShopping(arr)

                                    let found = users.find((user) => {
                                        return user.email === currentUser.email
                                    })

                                    found.shopping = arr
                                    currentUser.shopping = arr
                                    localStorage.setItem('current', JSON.stringify(found))
                                    localStorage.setItem('users', JSON.stringify(users))

                                    setShowCart(true)
                                }} className="text-[#d1f73d] bg-[#1a1c13] p-2.5 rounded-xl hover:bg-[#d1f73d] hover:text-black transition-all duration-300 cursor-pointer">
                                    🛒
                                </p>
                            </div>
                        })}

                    </div>
                </div>

                <div className="bg-[#121212] border border-zinc-800 rounded-3xl p-6 flex flex-col gap-5">
                    <div className="flex justify-between items-center">
                        <h3 className="text-white text-xl font-bold flex items-center gap-2 custom-wide-font">
                            <span className="text-[#d1f73d]">⚡</span>
                            New Arrivals
                        </h3>
                        <p onClick={() => { navigator('/products') }} className="text-[#d1f73d] text-sm font-semibold flex items-center gap-1 hover:text-[#b9e02a] transition-colors duration-300 cursor-pointer custom-wide-font">
                            See all →
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">
                        {newReveal.map((pro) => {
                            return <div className="bg-[#161616] border border-zinc-800 rounded-2xl p-4 flex items-center justify-between hover:border-white/10 transition-colors duration-300">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-zinc-800 overflow-hidden flex-shrink-0">
                                        <img src={pro.images[0]} alt="Product" className="w-full h-full object-cover opacity-80" />
                                    </div>
                                    <span className="text-[#d1f73d] text-lg font-bold custom-wide-font">${pro.price}</span>
                                </div>
                                <p onClick={() => {
                                    let arr = [...shopping, {...pro , qty : 1}]
                                    setShopping(arr)

                                    let found = users.find((user) => {
                                        return user.email === currentUser.email
                                    })

                                    found.shopping = arr
                                    currentUser.shopping = arr
                                    localStorage.setItem('current', JSON.stringify(found))
                                    localStorage.setItem('users', JSON.stringify(users))

                                    setShowCart(true)
                                }} className="text-[#d1f73d] bg-[#1a1c13] p-2.5 rounded-xl hover:bg-[#d1f73d] hover:text-black transition-all duration-300 cursor-pointer">
                                    🛒
                                </p>
                            </div>
                        })}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ListProduct