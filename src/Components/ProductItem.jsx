import {
  ShoppingBag,
  Heart,
  Truck,
  ShieldCheck,
  RotateCcw,
  ArrowRight,
  Star,
  ArrowLeft,
} from "lucide-react";
import ProductBottom from "./ProductBottom";
import { useNavigate, useParams } from "react-router";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { MyStore } from "../context/MyWebsite";

const ProductItem = () => {
  let { id } = useParams();
  let { Products, showCart, setShowCart, currentUser, setCurrentUser, shopping, setShopping, users, setUsers } = useContext(MyStore);
  let navigator = useNavigate();

  let product = Products.find((pro) => {
    return pro.id == id;
  });

  let f = shopping.find((s) => {
    return s.title === product.title
  })

  let isFilled = Math.floor(product?.rating);

  let filterCategory = Products?.filter((pro) => {
    return pro.category === product.category;
  });

  let only5Product = [];

  for (let i = 0; i < filterCategory.length; i++) {
    if (i === 5) {
      break;
    } else {
      only5Product.push(filterCategory[i]);
    }
  }

  return (
    <div className="flex flex-col gap-6 w-full">
      <Navbar />
      <div>
        <div className="w-full bg-[#0a0a0a] p-6 flex justify-center items-center">
          <div className="max-w-[1200px] w-full flex flex-col gap-6">
            <div className="flex items-center gap-2 text-zinc-500 text-sm">
              <span
                onClick={() => {
                  navigator("/products");
                }}
                className="hover:text-white cursor-pointer transition-colors"
              >
                ← Products
              </span>
              <span>/</span>
              <span
                onClick={() => {
                  navigator(`/products/${product.category}`);
                }}
                className="hover:text-white cursor-pointer transition-colors"
              >
                {product?.category}
              </span>
              <span>/</span>
              <span className="text-zinc-400 truncate max-w-[150px]">
                {product?.title}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start w-full">
              <div className="bg-white rounded-3xl p-6 aspect-square flex items-center justify-center overflow-hidden">
                <img
                  src={product?.images[0]}
                  alt="Wireless Bluetooth Headphones"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>

              <div className="flex flex-col gap-5">
                <div>
                  <span className="bg-[#1a1c13] text-[#d1f73d] text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider border border-[#d1f73d]/10">
                    {product?.category}
                  </span>
                  <h1 className="text-white text-3xl md:text-4xl font-bold tracking-tight mt-3 custom-wide-font">
                    {product?.title}
                  </h1>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-amber-400 text-sm flex gap-1">
                    <Star
                      className={`w-3 h-3 ${isFilled >= 1 ? "text-yellow-400 fill-yellow-400" : "text-gray-300 fill-none"}`}
                    />

                    <Star
                      className={`w-3 h-3 ${isFilled >= 2 ? "text-yellow-400 fill-yellow-400" : "text-gray-300 fill-none"}`}
                    />

                    <Star
                      className={`w-3 h-3 ${isFilled >= 3 ? "text-yellow-400 fill-yellow-400" : "text-gray-300 fill-none"}`}
                    />

                    <Star
                      className={`w-3 h-3 ${isFilled >= 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300 fill-none"}`}
                    />

                    <Star
                      className={`w-3 h-3 ${isFilled >= 5 ? "text-yellow-400 fill-yellow-400" : "text-gray-300 fill-none"}`}
                    />
                  </span>
                  <span className="text-white font-semibold text-sm">
                    {product?.rating?.rate}
                  </span>
                  <span className="text-zinc-500 text-sm">
                    ({product?.reviews.length} reviews)
                  </span>
                </div>

                <hr className="border-zinc-800" />

                <div className="text-[#d1f73d] text-4xl font-black tracking-tight custom-wide-font">
                  ${product?.price}
                </div>

                <hr className="border-zinc-800" />

                <p className="text-zinc-400 text-sm md:text-base leading-relaxed opacity-90">
                  {product?.description}
                </p>

                <div className="flex gap-3 items-center mt-2">
                  {f ? <button className="flex-1 bg-green-500 text-black font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-green-600 transition-all duration-300 custom-wide-font text-sm shadow-lg shadow-[#d1f73d]/10">
                    ✓ Added to Cart
                  </button> : <button onClick={() => {

                    let arr = [...shopping, {...product , qty : 1}]
                    setShopping(arr)

                    let found = users.find((user) => {
                      return user.email === currentUser.email
                    })

                    found.shopping = arr
                    currentUser.shopping = arr
                    localStorage.setItem('current', JSON.stringify(found))
                    localStorage.setItem('users', JSON.stringify(users))

                    setShowCart(true)
                  }} className="flex-1 bg-[#d1f73d] text-black font-bold py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-[#b9e02a] transition-all duration-300 custom-wide-font text-sm shadow-lg shadow-[#d1f73d]/10">
                    <ShoppingBag className="w-4 h-4" strokeWidth={2.5} /> Add to
                    Cart
                  </button>}
                  <button className="border border-zinc-800 bg-[#121212] text-zinc-400 hover:text-white hover:border-zinc-700 p-4 rounded-2xl transition-all duration-300">
                    <Heart className="w-5 h-5" strokeWidth={2} />
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-3 mt-4">
                  <div className="bg-[#121212] border border-zinc-800 rounded-xl p-3 flex flex-col items-center justify-center text-center gap-1">
                    <Truck className="text-[#d1f73d] w-5 h-5" strokeWidth={2} />
                    <span className="text-white text-xs font-bold mt-1">
                      Free Delivery
                    </span>
                    <span className="text-zinc-600 text-[10px]">
                      On orders $50+
                    </span>
                  </div>

                  <div className="bg-[#121212] border border-zinc-800 rounded-xl p-3 flex flex-col items-center justify-center text-center gap-1">
                    <ShieldCheck
                      className="text-[#d1f73d] w-5 h-5"
                      strokeWidth={2}
                    />
                    <span className="text-white text-xs font-bold mt-1">
                      Secure Pay
                    </span>
                    <span className="text-zinc-600 text-[10px]">
                      256-bit SSL
                    </span>
                  </div>

                  <div className="bg-[#121212] border border-zinc-800 rounded-xl p-3 flex flex-col items-center justify-center text-center gap-1">
                    <RotateCcw
                      className="text-[#d1f73d] w-5 h-5"
                      strokeWidth={2}
                    />
                    <span className="text-white text-xs font-bold mt-1">
                      Easy Returns
                    </span>
                    <span className="text-zinc-600 text-[10px]">
                      30-day policy
                    </span>
                  </div>
                </div>

                <div className="flex gap-3">

                  <button
                    onClick={() => {
                      if (product.id >= 1) {
                        let found = Products.find((pro) => {
                          return pro.id === product.id - 1;
                        });

                        if (found) {
                          navigator(`/product/${found.id}`);
                        }
                      }
                    }}
                    className="w-full bg-[#262626] text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-1.5 hover:bg-[#b9e02a] transition-all duration-300 custom-wide-font text-xs mt-4"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" strokeWidth={2.5} />{" "}
                    Previous
                  </button>
                  <button
                    onClick={() => {
                      if (product.id <= Products.length) {
                        let found = Products.find((pro) => {
                          return pro.id === product.id + 1;
                        });

                        if (found) {
                          navigator(`/product/${found.id}`);
                        }
                      }
                    }}
                    className="w-full bg-[#d1f73d] text-black font-bold py-3.5 rounded-xl flex items-center justify-center gap-1.5 hover:bg-[#b9e02a] transition-all duration-300 custom-wide-font text-xs mt-4"
                  >
                    Next{" "}
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
                  </button>


                </div>
              </div>
            </div>
          </div>
        </div>
        <ProductBottom show={only5Product} />
      </div>
      <Footer />
    </div>
  );
};

export default ProductItem;
