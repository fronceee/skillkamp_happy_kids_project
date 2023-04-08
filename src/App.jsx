import PromoCodeBar from './components/PromoCodeBar'
import './App.css'
import MyCarousel from './components/MyCarousel'
import LogoBar from './components/LogoBar'
import NavBar from './components/NavBar'
import NewArrivals from './containers/NewArrivals'
import Footer from './containers/Footer'

function App() {

  return (
    <div className="App">
      <PromoCodeBar />
      <LogoBar fontSize="text-5xl" />
      <NavBar />
      <MyCarousel />
      <NewArrivals />
      <Footer />
    </div>
  )
}

export default App
