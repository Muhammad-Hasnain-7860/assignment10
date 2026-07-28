import React, { useContext, useEffect, useState } from 'react'
import { MyStore } from '../context/MyWebsite'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useNavigate, useParams } from 'react-router'
import { Star } from 'lucide-react'
import CartDrawer from './CartDrawer'

const Shop = () => {
  let { Products, currentUser, setCurrentUser, users, setUsers, categoryProduct, setCategoryProduct, topRated, setTopRated, currentCat, setCurrentCat, shopping, setShopping, showCart, setShowCart } = useContext(MyStore)
  let { category } = useParams()
  let navigator = useNavigate()
  const [search, setSearch] = useState('')


  const filterProduct = () => {
    let filterArr = Products.filter((pro) => {
      return pro.category === category
    })

    setCategoryProduct(filterArr)
  }

  useEffect(() => {
    if (category) {
      filterProduct()
    } else {
      setCategoryProduct(Products)
    }

    setShopping(currentUser.shopping)
  }, [category, Products])


  const searchProducts = () => {
    let searchingData = Products.filter((product) => {
      return product.title.toLowerCase().includes(search.toLowerCase())
    })
    setCategoryProduct(searchingData)
  }


  console.log(shopping);


  return (
    <div>

      <Navbar />
      <div className="w-full bg-[#0a0a0a] p-6 flex justify-center items-center">
        <div className="max-w-[1200px] w-full flex flex-col gap-6">

          <div className="flex flex-col gap-1">
            <h2 className="text-white text-3xl font-bold tracking-tight custom-wide-font">
              All Products
            </h2>
            <span className="text-zinc-500 text-sm">
              50 products found
            </span>
          </div>

          <div className="bg-[#121212] border border-zinc-800 rounded-2xl p-4 flex flex-col md:flex-row gap-4 justify-between items-center w-full">
            <div className="relative w-full md:flex-1">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 text-lg">🔍</span>
              <input onInput={(e) => {
                setSearch(e.target.value);
                searchProducts()
              }}
                type="text"
                placeholder="Search products..."
                className="w-full bg-[#161616] border border-zinc-800 rounded-xl pl-11 pr-4 py-3 text-white text-sm focus:outline-none focus:border-[#d1f73d]/40"
              />
            </div>

            <div className="flex gap-3 w-full md:w-auto">
              <select onChange={(e) => {

                if (e.target.value === 'featured') {
                  setCurrentCat('featured')
                  navigator('/products')
                  return
                }

                setCurrentCat(e.target.value)
                navigator(`/products/${e.target.value}`)
              }} className="w-full md:w-48 bg-[#161616] border border-zinc-800 rounded-xl px-4 py-3 text-zinc-400 text-sm appearance-none focus:outline-none focus:border-[#d1f73d]/40">
                <option value="featured">Featured</option>
                <option value="beauty">Beauty</option>
                <option value="fragrances">Fragrances</option>
                <option value="furniture">Furniture</option>
                <option value="groceries">Groceries</option>
              </select>
              <select onChange={(e) => {
                let val = e.target.value

                if (val === 'low-to-high') {
                  categoryProduct.sort((a, b) => {
                    return a.price - b.price
                  })

                  setCurrentCat('low-to-high')
                } else if (val === 'high-to-low') {
                  categoryProduct.sort((a, b) => {
                    return b.price - a.price
                  })

                  setCurrentCat('high-to-low')
                } else if (val === 'top-rated') {
                  categoryProduct.sort((a, b) => {
                    return b.rating - a.rating
                  })

                  setCurrentCat('top-rated')
                } else if (val === 'lowest-rated') {
                  categoryProduct.sort((a, b) => {
                    return a.rating - b.rating
                  })
                  setCurrentCat('Low Rating')
                }
              }} className="w-full md:w-48 bg-[#161616] border border-zinc-800 rounded-xl px-4 py-3 text-zinc-400 text-sm appearance-none focus:outline-none focus:border-[#d1f73d]/40">

                <option value="featured">Featured</option>
                <option value="low-to-high">Price: Low → High</option>
                <option value="high-to-low">Price: High → Low</option>
                <option value="top-rated">Top Rated</option>
                <option value="lowest-rated">Lowest Rated</option>

              </select>
            </div>

          </div>

          <span className="w-fit bg-[#1a1a1a] text-gray-300 px-4 py-2 rounded border border-gray-700 font-sans inline-block">
            {currentCat}
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">

            {categoryProduct.map((elem) => {
              let isFilled = Math.floor(elem.rating)
              let f = shopping.find((s) => {
                return s.title === elem.title
              })



              return <div onClick={() => { navigator(`/product/${elem.id}`) }} className="bg-[#121212] border border-white/20 rounded-2xl overflow-hidden flex flex-col group transition-all duration-300">
                <div className="relative aspect-square bg-[#161616] p-4 flex items-center justify-center">
                  <span className="absolute top-3 left-3 bg-zinc-800/80 backdrop-blur-md text-white text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider font-semibold">
                    {elem.category}
                  </span>
                  <img
                    src={elem.images[0]}
                    alt="Product"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>

                <div className="p-5 flex flex-col flex-1 gap-3">
                  <div className="flex flex-col gap-1">
                    <span className="text-zinc-500 text-xs uppercase tracking-wider">
                      {elem.category}
                    </span>
                    <h4 className="text-white text-base font-bold line-clamp-2 custom-wide-font">
                      {elem.title}
                    </h4>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <span className="text-amber-400 text-xs flex gap-1">
                      <Star className={`w-3 h-3 ${isFilled >= 1 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 fill-none'}`} />

                      <Star className={`w-3 h-3 ${isFilled >= 2 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 fill-none'}`} />

                      <Star className={`w-3 h-3 ${isFilled >= 3 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 fill-none'}`} />

                      <Star className={`w-3 h-3 ${isFilled >= 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 fill-none'}`} />

                      <Star className={`w-3 h-3 ${isFilled >= 5 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 fill-none'}`} />
                    </span>
                    <span className="text-zinc-500 text-xs">({elem.stock})</span>
                  </div>

                  <div className="flex justify-between items-center mt-auto pt-2 border-t border-zinc-800/50">
                    <span className="text-[#d1f73d] text-xl font-bold custom-wide-font">
                      ${elem.price}
                    </span>
                    {f ? <button onClick={(e) => { e.stopPropagation() }} className="bg-green-500 text-white font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 hover:bg-green-600 transition-colors duration-300 custom-wide-font">
                      ✓ Added to Cart
                    </button> : <button onClick={(e) => {
                      e.stopPropagation()

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

                    }} className="bg-[#d1f73d] text-black font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 hover:bg-[#b9e02a] transition-colors duration-300 custom-wide-font">
                      <span>🛒</span> Add to Cart
                    </button>}
                  </div>
                </div>
              </div>

            })
            }
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Shop