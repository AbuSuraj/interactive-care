import './App.css' 
import About from './pages/About/About'
import Clients from './pages/Clients/Clients'
import Footer from './pages/Footer/Footer'
import HeroSection from './pages/Hero-section/HeroSection'
import Navbar from './pages/Navbar/Navbar'
import ServiceSection from './pages/Our-Services/Services'
import ProcessSection from './pages/Process-Section/ProcessSection'
import StatSection from './pages/State/State'
import Testimonials from './pages/Testimonials/Testimonials' 

function App() { 

  return (
    <>
       <Navbar></Navbar>
       <HeroSection></HeroSection>
       <Clients></Clients>
       <ServiceSection></ServiceSection>
       <ProcessSection></ProcessSection>
       <About></About>
       <StatSection></StatSection>
       <Testimonials></Testimonials>
       <Footer></Footer>
    </>
  )
}

export default App
