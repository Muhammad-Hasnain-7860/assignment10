import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { data } from "react-router";

export let MyStore = createContext()

export const ContextProvider = ({ children }) => {
    let [users, setUsers] = useState([])
    let [currentUser, setCurrentUser] = useState(null)
    const [Products, setProducts] = useState([])
    const [categoryProduct, setCategoryProduct] = useState([])
    const [topRated, setTopRated] = useState([])
    const [currentCat, setCurrentCat] = useState('Featured')
    let [shopping, setShopping] = useState([])
    let [toggle, setToggle] = useState(false)
    const [showCart, setShowCart] = useState(false)

    console.log(shopping);


    const getProductData = async () => {
        try {
            let response = await axios.get('https://dummyjson.com/products?limit=50')
            let data = response.data.products
            setProducts(data)
        } catch (error) {
            console.log(error.message);
        }
    }

    const updateProduct = (id) => {
        let arr = currentUser.shopping.map((s) => {
            return s.id === id ? { ...s, qty: s.qty + 1 } : s
        })


        const obj = { ...currentUser, shopping: arr }

        let updatedUser = users.map((user) => {
            return user.email === currentUser.email ? obj : user
        })

        setCurrentUser(obj)
        setUsers(updatedUser)

        localStorage.setItem('users', JSON.stringify(updatedUser))
        localStorage.setItem('current', JSON.stringify(obj))
    }

    const decrementProducts = (id) => {

        let found = currentUser.shopping.find((s) => {
            return s.id === id
        })

        let foundIdx = currentUser.shopping.findIndex((s) => {
            return s.id === id
        })

        if (found.qty > 1) {
            let arr = currentUser.shopping.map((s) => {
                return s.id === id ? { ...s, qty: s.qty - 1 } : s
            })


            const obj = { ...currentUser, shopping: arr }

            let updatedUser = users.map((user) => {
                return user.email === currentUser.email ? obj : user
            })

            setCurrentUser(obj)
            setUsers(updatedUser)
            localStorage.setItem('users', JSON.stringify(updatedUser))
            localStorage.setItem('current', JSON.stringify(obj))
        } else {
            currentUser.shopping.splice(foundIdx, 1)

            let obj = {...currentUser}

            let updatedUser = users.map((user) => {
                return user.email === currentUser.email ? obj : user
            })

            setCurrentUser(obj)
            setUsers(updatedUser)
            localStorage.setItem('users', JSON.stringify(updatedUser))
            localStorage.setItem('current', JSON.stringify(obj))
        }




    }

    useEffect(() => {
        setCurrentUser(JSON.parse(localStorage.getItem('current')))
        setUsers(JSON.parse(localStorage.getItem('users')) || [])
        getProductData()
    }, [])

    return <MyStore.Provider value={{ updateProduct, shopping, setShopping, currentCat, setCurrentCat, topRated, setTopRated, categoryProduct, setCategoryProduct, users, setUsers, currentUser, setCurrentUser, Products, setProducts, showCart, setShowCart , decrementProducts }}>{children}</MyStore.Provider>
}