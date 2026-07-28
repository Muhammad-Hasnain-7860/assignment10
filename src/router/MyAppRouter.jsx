import { Routes, Route } from "react-router"
import Dashboard from "../Components/Dashboard"
import Register from "../Components/Register"
import LoginPage from "../Components/LoginPage"
import Protected from "../router/ProtectedRoute"
import Shop from '../Components/Shop'
import About from '../Components/About'
import ProductItem from "../Components/ProductItem"
import CartDrawer from '../Components/CartDrawer'

const MyAppRouter = () => {
    return (

        <Routes>
            <Route path='/register' element={<Register />} />
            <Route path='/dashboard' element = {<Protected>
                <Dashboard />
            </Protected>} />
            <Route path='/' element={<LoginPage />} />
            <Route path="/products" element={<Protected>
                <Shop />
            </Protected>} />
            <Route path="/about" element={<Protected>
                <About />
            </Protected>} />

            <Route path="/products/:category" element={<Protected>
                <Shop />
            </Protected>} />

            <Route path='/product/:id' element={<ProductItem />} />


        </Routes>

    )
}

export default MyAppRouter