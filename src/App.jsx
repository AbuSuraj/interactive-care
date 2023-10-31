import './App.css' 
import Clients from './components/Clients/Clients'
import Footer from './components/Footer/Footer'
import HeroSection from './components/Hero-section/HeroSection'
import Navbar from './components/Navbar/Navbar'
import ServiceSection from './components/Our-Services/Services'

function App() { 

  return (
    <>
       <Navbar></Navbar>
       <HeroSection></HeroSection>
       <Clients></Clients>
       <ServiceSection></ServiceSection>
       <Footer></Footer>
    </>
  )
}

export default App
