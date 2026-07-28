import Hero from '../Components/Hero'
import CategorySection from '../Components/CategorySection'
import StatusSection from '../Components/StatusSection'
import ListProduct from '../Components/ListProduct'
import FooterTop from '../Components/FotterTop'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router'

const Dashboard = () => {
  return (
    <div>
      <Navbar />
        <Hero />
        <StatusSection />
        <CategorySection />
        <ListProduct />
        <FooterTop />
        <Footer />

    </div>
  )
}

export default Dashboard